import { useState, useMemo } from 'react';
import { Document } from './types';

const useDocumentSearch = (documents: Document[]) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('All Categories');
  const [districtFilter, setDistrictFilter] = useState<string>('All Districts');

  const filteredDocuments = useMemo(() => {
    return documents.filter(doc => {
      const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          doc.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = categoryFilter === 'All Categories' || doc.category === categoryFilter;
      const matchesDistrict = districtFilter === 'All Districts' || doc.district === districtFilter;
      
      return matchesSearch && matchesCategory && matchesDistrict;
    });
  }, [documents, searchTerm, categoryFilter, districtFilter]);

  return {
    searchTerm,
    setSearchTerm,
    categoryFilter,
    setCategoryFilter,
    districtFilter,
    setDistrictFilter,
    filteredDocuments
  };
};

export default useDocumentSearch;