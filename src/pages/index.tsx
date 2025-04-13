'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FiPlus, FiFilter, FiTrash2, FiHome, FiUser, FiSettings, FiMenu, FiX } from 'react-icons/fi';
import { Collection, CollectionType, INITIAL_COLLECTION } from '@/data/mockData';
import Image from 'next/image';

export default function CollectionsPage() {
  const [collections, setCollections] = useState<Collection[]>(INITIAL_COLLECTION);
  const [activeFilter, setActiveFilter] = useState<CollectionType | 'All'>('All');
  const [search, setSearch] = useState('');
  const [editingId, setEditingId] = useState<number | null>(null);
  const [renameValue, setRenameValue] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleRename = (id: number, newName: string) => {
    setCollections((prev) =>
      prev.map((col) => (col.id === id ? { ...col, title: newName } : col))
    );
    setEditingId(null);
  };

  const filteredCollections = collections.filter((col) => {
    const matchesFilter = activeFilter === 'All' || col.type === activeFilter;
    const matchesSearch =
      col.title.toLowerCase().includes(search.toLowerCase()) ||
      col.type.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#EFEFEF]">
      {/* Mobile Menu Button - Only visible on small screens */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          className="rounded-full w-10 h-10 bg-white shadow-md"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </Button>
      </div>

      {/* Sidebar - Desktop version */}
      <div className="hidden md:flex md:w-[60px] p-4  flex-col justify-between h-screen sticky top-0">
        <div className="flex flex-col items-center gap-8">
          <Button variant="link" className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <FiHome size={24} />
          </Button>
          <Button variant="link" className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <FiUser size={24} />
          </Button>
          <Button variant="link" className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <FiSettings size={24} />
          </Button>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Button variant="link" className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <FiSettings size={24} />
          </Button>
          <Button variant="link" className="text-gray-600 p-2 hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center">
            <FiSettings size={24} />
          </Button>
        </div>
      </div>

      {/* Mobile Sidebar - Slide in from left */}
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
        mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} onClick={toggleMobileMenu}>
        <div 
          className={`fixed top-0 left-0 h-full w-64  shadow-xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-4">
            <div className="flex justify-end mb-6">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={toggleMobileMenu}
              >
                <FiX size={24} />
              </Button>
            </div>
            <div className="flex flex-col gap-4">
              <Button variant="ghost" className="flex items-center gap-3 justify-start p-3 rounded-lg">
                <FiHome size={24} /> <span>Home</span>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start p-3 rounded-lg">
                <FiUser size={24} /> <span>Profile</span>
              </Button>
              <Button variant="ghost" className="flex items-center gap-3 justify-start p-3 rounded-lg">
                <FiSettings size={24} /> <span>Settings</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation for Mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-30">
        <div className="flex justify-around items-center p-2">
          <Button variant="ghost" className="flex flex-col items-center p-2 min-w-[60px] min-h-[60px]">
            <FiHome size={24} />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2 min-w-[60px] min-h-[60px]">
            <FiUser size={24} />
            <span className="text-xs mt-1">Profile</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center p-2 min-w-[60px] min-h-[60px]">
            <FiSettings size={24} />
            <span className="text-xs mt-1">Settings</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 sm:p-6 md:p-8 bg-white rounded-lg m-2 md:m-4 mb-20 md:mb-4 overflow-hidden">
        <h1 className="text-2xl sm:text-3xl font-bold mt-8 md:mt-0">Collections</h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1 mb-4 sm:mb-6">Personalized content storyboards</p>

        {/* Filter Buttons - Scrollable on mobile */}
        <div className="flex overflow-x-auto pb-2 -mx-2 px-2 mb-4 hide-scrollbar">
          <div className="flex gap-2">
            {['All', 'Photos', 'Videos', 'Documents'].map((type) => (
              <Button
                key={type}
                onClick={() => setActiveFilter(type as CollectionType | 'All')}
                className={`px-4 py-2 rounded-full text-sm whitespace-nowrap min-w-[80px] ${
                  activeFilter === type
                    ? 'bg-black text-white'
                    : 'bg-white text-black border'
                }`}
              >
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Search and Actions - Responsive layout */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Input
              placeholder="Search collections..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-full w-full sm:w-64 h-10 sm:h-auto"
            />
            <Button variant="outline" className="rounded-full min-w-[40px] min-h-[40px] p-2">
              <FiFilter size={20} />
            </Button>
            <Button variant="outline" className="rounded-full min-w-[40px] min-h-[40px] p-2">
              <FiTrash2 size={20} />
            </Button>
          </div>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full flex items-center gap-2 px-4 py-2 h-10 sm:h-auto w-full sm:w-auto justify-center sm:justify-start">
            <FiPlus /> <span>Create new collection</span>
          </Button>
        </div>

        {/* Collection Grid - Responsive grid with better breakpoints */}
        <div className="overflow-y-auto pb-16 md:pb-4 p-4">
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {filteredCollections.map((col) => (
              <div
                key={col.id}
                className="rounded-xl overflow-hidden  transition-transform hover:shadow-lg focus-within:ring-2 focus-within:ring-pink-500"
              >
                <div className="relative  aspect-video">
                  <Image
                    src={col.thumbnail}
                    alt={col.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover rounded-xl"
                  />
                  {col.locked && (
                    <span className="absolute top-2 left-2 bg-white p-1 rounded-full text-xs">
                      🔒
                    </span>
                  )}
                </div>
                <div className="p-3">
                  {editingId === col.id ? (
                    <input
                      value={renameValue}
                      onChange={(e) => setRenameValue(e.target.value)}
                      onBlur={() => handleRename(col.id, renameValue)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleRename(col.id, renameValue);
                      }}
                      autoFocus
                      className="text-sm font-semibold border-b w-full outline-none p-1"
                    />
                  ) : (
                    <p
                      className="text-sm font-semibold cursor-pointer truncate"
                      onClick={() => {
                        setEditingId(col.id);
                        setRenameValue(col.title);
                      }}
                    >
                      {col.title}
                    </p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">{`${col.itemCount} ${col.type}`}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}






