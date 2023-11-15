import { useEffect, useState } from 'react'
import { View, Button, ScrollView } from 'react-native';

import { FakeStore } from '../services/interfaces/fakestore.interface'
import Loading from '../components/loading/Loading'
import ListFakeStore from '../components/list-fakestore/ListFakeStore'
import { getData } from '../services/fakestore.service'

const Home = () => {
  const [fakeStoreData, setFakeStoreData] = useState<FakeStore[]>([])
  const [loading, setLoading] = useState(false)
  const [ascOrder, setAscOrder] = useState(true)

  const getFakeStoreData = async () => {
    try {
      setLoading(true)
      const response = await getData()
      setFakeStoreData(
        response.data.sort((a: FakeStore, b: FakeStore) => a.price - b.price)
      )
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  useEffect(() => {
    getFakeStoreData()
  }, [])

  const handleClickButton = () => {
    ascOrder
      ? setFakeStoreData(
        fakeStoreData.sort((a: FakeStore, b: FakeStore) => b.price - a.price)
      )
      : setFakeStoreData(
        fakeStoreData.sort((a: FakeStore, b: FakeStore) => a.price - b.price)
      )

    setAscOrder(!ascOrder)
  }

  return (
    <View>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView>
          <View>
            <Button title={ascOrder ? 'Desc' : 'Asc'} onPress={handleClickButton} />
          </View>
          {fakeStoreData.map((fakeStore) => (
            <ListFakeStore key={fakeStore.id.toString()} list={fakeStore} />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

export default Home
