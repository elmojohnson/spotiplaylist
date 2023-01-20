import PlaylistContext from '@/contexts/PlaylistContext'
import useSearchTracks from '@/hooks/spotify/useSearchTracks'

import Layout from '@/layouts/Layout'

const Playlist = () => {
  const searchTracks = useSearchTracks();

  return (
    <Layout>
      <PlaylistContext.Provider value={searchTracks}>

      </PlaylistContext.Provider>
    </Layout>
  )
}

export default Playlist