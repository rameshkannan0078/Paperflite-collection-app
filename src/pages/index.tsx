"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FiTrash2, FiX } from "react-icons/fi"
import { IoMdAddCircleOutline, IoMdArrowRoundDown } from "react-icons/io"
import { GoCopy } from "react-icons/go"
import { TbTextSize } from "react-icons/tb"
import { type Collection, type CollectionType, INITIAL_COLLECTION } from "@/data/mockData"
import Image from "next/image"
import { Search } from "lucide-react"
import { IoArrowUpSharp } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi"

export default function CollectionsPage() {
  const menuIcons = [
    "/assets/icons/Component_0.svg",
    "/assets/icons/Component_1.svg",
    "/assets/icons/Component_2.svg",
    "/assets/icons/Component_3.svg",
    "/assets/icons/Component_4.svg",
    "/assets/icons/Component_5.svg",
  ]

  const [collections, setCollections] = useState<Collection[]>(INITIAL_COLLECTION)
  const [activeFilter, setActiveFilter] = useState<CollectionType | "All Files">("All Files")
  const [search, setSearch] = useState("")
  const [itemsToRename, setItemsToRename] = useState<Record<number, string>>({})
  const [bulkRenameMode, setBulkRenameMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedItems, setSelectedItems] = useState<number[]>([])
  const [editingItemId, setEditingItemId] = useState<number | null>(null)
  const [editingValue, setEditingValue] = useState("")
  const [sortBy, setSortBy] = useState<"default" | "createdDate">("default")
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc")

  const updateRenameValue = (id: number, value: string) => {
    setItemsToRename((prev) => ({
      ...prev,
      [id]: value,
    }))
  }


  const toggleBulkRenameMode = () => {
    if (bulkRenameMode) {

      if (Object.keys(itemsToRename).length > 0) {
        const updatedCollections = collections.map((col) => {
          if (itemsToRename[col.id]) {
            return { ...col, title: itemsToRename[col.id] }
          }
          return col
        })
        setCollections(updatedCollections)
        setItemsToRename({})
      }
    } else {

      const initialRenames = collections.reduce(
        (acc, col) => {
          acc[col.id] = col.title
          return acc
        },
        {} as Record<number, string>,
      )
      setItemsToRename(initialRenames)
    }
    setBulkRenameMode(!bulkRenameMode)
  }

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) => (prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]))
  }


  const selectAllItems = () => {
    if (selectedItems.length === filteredCollections.length) {
      setSelectedItems([])
    } else {
      setSelectedItems(filteredCollections.map((col) => col.id))
    }
  }


  const applyBulkRename = (pattern: string) => {
    const itemsToUpdate = selectedItems.length > 0 ? selectedItems : filteredCollections.map((col) => col.id)

    const newRenames = { ...itemsToRename }
    itemsToUpdate.forEach((id, index) => {

      const newName = pattern.replace(/{n}/g, `${index + 1}`)
      newRenames[id] = newName
    })

    setItemsToRename(newRenames)
  }

  const filteredCollections = collections.filter((col) => {
    const matchesFilter = activeFilter === "All Files" || col.type === activeFilter
    const matchesSearch =
      col.title.toLowerCase().includes(search.toLowerCase()) || col.type.toLowerCase().includes(search.toLowerCase())
    return matchesFilter && matchesSearch
  })


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }


  const handleItemClick = (col: Collection) => {
    if (bulkRenameMode) {
      toggleSelectItem(col.id)
    } else {
      setEditingItemId(col.id)
      setEditingValue(col.title)
    }
  }


  const saveEditedItem = () => {
    if (editingItemId !== null) {
      const updatedCollections = collections.map((col) => {
        if (col.id === editingItemId) {
          return { ...col, title: editingValue }
        }
        return col
      })
      setCollections(updatedCollections)
      setEditingItemId(null)
    }
  }

  const cancelEditing = () => {
    setEditingItemId(null)
  }


  const toggleSort = (type: "default" | "createdDate") => {
    if (sortBy === type) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortBy(type)
      setSortDirection("desc")
    }
  }


  const formatDate = (id: number) => {
    const date = new Date(2023, id % 12, id + 1)
    return date.toLocaleDateString()
  }


  const sortedCollections = [...filteredCollections].sort((a, b) => {
    if (sortBy === "createdDate") {

      return sortDirection === "asc" ? a.id - b.id : b.id - a.id
    }
    return 0
  })

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#EFEFEF]">

      <div
        className={`${mobileMenuOpen ? "fixed inset-y-0 left-0 z-50 bg-white" : "hidden"
          } md:flex md:w-[60px] p-4 flex-col justify-between h-screen sticky top-0`}
      >

        {mobileMenuOpen && (
          <div className="md:hidden absolute top-4 right-4">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-10 h-10"
              onClick={toggleMobileMenu}
            >
              <FiX size={24} />
            </Button>
          </div>
        )}

        <div className="flex flex-col mt-16 items-center gap-8">
          {menuIcons.map((icon, index) => (
            <div key={index}>
              <Image
                alt={`Menu icon ${index}`}
                src={icon || "/placeholder.svg"}
                width={25}
                height={25}
                quality={90}
                style={{ color: 'red' }}
              />

            </div>
          ))}
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button
            variant="link"
            className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Image alt="Motif icon" src="/assets/icons/motif.svg" width={25} height={25} quality={90} />
          </Button>
          <Button
            variant="link"
            className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center"
          >
            <Image alt="Boter icon" src="/assets/icons/boter.svg" width={25} height={25} quality={90} />
          </Button>
        </div>
      </div>

      <div className="md:hidden fixed top-4 left-4 z-40">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10 bg-white shadow-md"
          onClick={toggleMobileMenu}
        >
          <GiHamburgerMenu />
        </Button>
      </div>


      <div className="flex-1 p-2 xs:p-3 sm:p-6 md:p-8 bg-white rounded-lg m-1 xs:m-2 md:m-4 mb-20 md:mb-4 overflow-hidden">
        {editingItemId === null ? (

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div>
              <h1 className="text-2xl xs:text-3xl md:text-4xl font-black mt-8 md:mt-0">Collections</h1>
              <p className="text-gray-500 text-xs xs:text-sm md:text-base mt-1 mb-4">
                Personalized content storyboards
              </p>
            </div>

            <div className="w-full lg:w-1/4">
              <div className="flex flex-col space-y-3 sm:space-y-4">

                <div className="flex items-center gap-2 w-full">
                  <div className="relative flex-1">
                    <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      placeholder="Type here to search..."
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      className="rounded-md w-full h-10 xs:h-12 p-2 pl-10"
                      aria-label="Search collections"
                    />
                  </div>
                  <div className="rounded-md min-w-[40px] min-h-[40px] border-2 p-2 flex items-center">
                    <Image alt="Motif icon" src="/assets/icons/motif.svg" width={20} height={20} quality={90} />
                  </div>
                </div>

                <div className="flex flex-row flex-nowrap gap-1 justify-between xs:justify-start">
                  <Button
                    variant="outline"
                    className="rounded-md min-w-[40px] min-h-[40px] p-2"
                    onClick={toggleBulkRenameMode}
                  >
                    <TbTextSize size={20} />
                  </Button>
                  <Button variant="outline" className="rounded-md min-w-[40px] min-h-[40px] p-2">
                    <FiTrash2 size={20} />
                  </Button>
                  <Button variant="outline" className="rounded-md min-w-[40px] min-h-[40px] p-2">
                    <GoCopy size={20} />
                  </Button>
                  <Button className="text-black border-gray-300 border w-1/2 rounded-md flex items-center gap-2 px-3 xs:px-4 py-2 h-10 bg-white">
                    <IoMdAddCircleOutline className="text-[#E51058]" />
                    <div className="">Create new collection</div>

                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (

          <div className="flex flex-col lg:flex-row justify-between gap-4">
            <div className="flex-1">
              <h1 className="text-2xl xs:text-3xl md:text-4xl font-black mt-8 md:mt-0">Edit Collection</h1>
              <p className="text-gray-500 text-xs xs:text-sm md:text-base mt-1 mb-1">
                All changes made to this section will reflect for all users in the content hub.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" onClick={cancelEditing}>
                Cancel
              </Button>
              <Button className="bg-[#E51058] hover:bg-[#C50D4A] text-white" onClick={saveEditedItem}>
                Save
              </Button>
            </div>
          </div>
        )}

        {bulkRenameMode && (
          <div className="bg-gray-50 p-4 rounded-lg my-4 border">
            <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
              <div className="flex-1">
                <h3 className="text-sm font-medium mb-1">Bulk Rename</h3>
                <div className="flex gap-2">
                  <Input
                    placeholder="Collection {n}"
                    className="flex-1"
                    onChange={(e) => applyBulkRename(e.target.value)}
                  />
                  <Button variant="outline" size="sm" onClick={selectAllItems}>
                    {selectedItems.length === filteredCollections.length ? "Deselect All" : "Select All"}
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-1">Use {"{n}"} as a placeholder for numbering</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => setBulkRenameMode(false)}>
                  Cancel
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={toggleBulkRenameMode}
                  className="bg-[#E51058] hover:bg-[#C50D4A]"
                >
                  Apply
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center my-4 gap-2">
          {/* Filter Buttons - Scrollable on mobile */}
          <div className="w-full xs:w-auto overflow-x-auto pb-2 hide-scrollbar">
            <div className="flex gap-2">
              {["All Files", "Photos", "Videos", "Documents"].map((type) => (
                <Button
                  key={type}
                  onClick={() => setActiveFilter(type as CollectionType | "All Files")}
                  className={`px-3 xs:px-4 py-1 xs:py-2 rounded-full text-xs xs:text-sm whitespace-nowrap min-w-[70px] xs:min-w-[80px] ${activeFilter === type ? "text-white" : "text-[#E51058] border"
                    }`}
                  style={{
                    backgroundColor: activeFilter === type ? "#E51058" : "white",
                    borderColor: "gray",
                  }}
                >
                  {type}
                </Button>
              ))}
            </div>
          </div>

          {/* Sort by options */}
          <div className="flex items-center gap-2 xs:ml-2 w-full xs:w-auto justify-end">
            <span className="text-sm text-gray-500 whitespace-nowrap hidden xs:inline">Sort by:</span>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center gap-1 text-xs xs:text-sm"
              onClick={() => toggleSort("createdDate")}
            >
              Created date
              {sortBy === "createdDate" &&
                (sortDirection === "asc" ? <IoArrowUpSharp /> : <IoMdArrowRoundDown />)}
            </Button>
          </div>
        </div>


        <div className="overflow-y-auto pb-16 md:pb-4 p-1 xs:p-4">
          {editingItemId !== null && (
            <div className="mb-6 p-4 border rounded-lg">
              <label className="block text-sm font-medium mb-2">Collection Name</label>
              <Input value={editingValue} onChange={(e) => setEditingValue(e.target.value)} className="w-full mb-1" />
              <p className="text-xs text-gray-500">Enter a descriptive name for this collection</p>
            </div>
          )}

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-4 sm:gap-6">
            {sortedCollections.map((col) => (
              <div
                key={col.id}
                className={`rounded-xl overflow-hidden transition-transform hover:shadow-lg focus-within:ring-2 focus-within:ring-pink-500 ${bulkRenameMode && selectedItems.includes(col.id) ? "ring-2 ring-[#E51058]" : ""
                  } ${editingItemId === col.id ? "ring-2 ring-[#E51058]" : ""}`}
                onClick={() => handleItemClick(col)}
              >
                <div className="relative aspect-video">
                  <Image
                    src={col.thumbnail || "/placeholder.svg"}
                    alt={col.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover rounded-xl"
                    priority={col.id <= 4}
                    quality={80}
                  />
                  {bulkRenameMode && (
                    <div className="absolute top-2 right-2 w-5 h-5 rounded-full border-2 flex items-center justify-center bg-white">
                      {selectedItems.includes(col.id) && <div className="w-3 h-3 rounded-full bg-[#E51058]"></div>}
                    </div>
                  )}
                </div>
                <div className="p-3">
                  {bulkRenameMode ? (
                    <input
                      value={itemsToRename[col.id] || col.title}
                      onChange={(e) => updateRenameValue(col.id, e.target.value)}
                      className="text-xs xs:text-sm font-semibold border-b w-full outline-none p-1"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <p className="text-xs xs:text-sm font-semibold cursor-pointer truncate">{col.title}</p>
                  )}
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-xs text-gray-500">{`${col.itemCount} ${col.type}`}</p>
                    <p className="text-xs text-gray-400">Created {formatDate(col.id)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}