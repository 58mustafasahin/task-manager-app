import { useQueryStore } from '@/hooks/useQueryStore'
import { Input } from '../ui/input'

const SearchInput = () => {
    const { query, setQuery } = useQueryStore();
    return (
        <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type='text' 
            className='h-10' 
            placeholder='Filter By Tasks...' 
        />
    )
}

export default SearchInput
