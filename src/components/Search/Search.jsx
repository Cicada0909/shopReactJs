import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce/useDebounce';
import styles from './Search.module.css'
import React, { useEffect, useState } from 'react'

const Search = () => {
    const [searchParms, setSearchParams] = useSearchParams();
    
    const [search, setSearch] = useState(searchParms.get("search") || "");
    
    const debouncedSearch = useDebounce(search, 500);

    useEffect(() => {
        if (search) {
            setSearchParams({ search: search});
        } else {
            setSearchParams({})
        }
    }, [search, setSearchParams]);

    // console.log(searchParms);
    // console.log(debouncedSearch);
    
    

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.search}
                type="search" 
                placeholder='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default Search