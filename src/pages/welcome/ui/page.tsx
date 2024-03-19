import { FC, useState } from 'react'

import { useIntradays } from '@/entities/intraday'
import { MainLayout } from '@/pages/layouts/main'
import { ItemDialog } from '@/pages/welcome/ui/itemdialog'
import { ListComputed } from '@/pages/welcome/ui/listcomputed'
import { ListFilter } from '@/pages/welcome/ui/listfilter'
import { ListItems } from '@/pages/welcome/ui/listitems'
import { Container } from '@/shared/ui/container'
import { DialogComponent } from '@/shared/ui/dialog'
import { DragDropContext } from '@hello-pangea/dnd'

export const WelcomePage: FC = () => {
  const { items, setItems } = useIntradays()

  const reorder = (list, startIndex, endIndex) => {
    const result = [...list]
    const [removed] = result.splice(startIndex, 1)
    result.splice(endIndex, 0, removed)

    return result
  }
  const removeItem = (id) => {
    setItems(items.filter((item) => item.datetime !== id))
  }

  const updateItem = (id) => {
    setItems(
      items.map((item) =>
        item.datetime === id ? { ...item, completed: !item.completed } : item,
      ),
    )
  }

  const computedItemsLeft = items.filter((item) => !item.completed).length

  const clearCompleted = () => {
    setItems(items.filter((item) => !item.completed))
  }

  const [filter, setFilter] = useState('all')

  const changeFilter = (filter) => setFilter(filter)

  const filteredItems = () => {
    switch (filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.completed)
      case 'completed':
        return items.filter((item) => item.completed)
      default:
        return items
    }
  }

  const handleDragEnd = (result) => {
    const { destination, source } = result
    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    )
      return

    setItems((prevTasks) => reorder(prevTasks, source.index, destination.index))
  }

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState({})

  return (
    <MainLayout title="React Test App">
      <Container>
        <DragDropContext onDragEnd={handleDragEnd}>
          <ListItems
            items={filteredItems()}
            removeItem={removeItem}
            updateItem={updateItem}
            setIsOpen={setIsOpen}
            setSelectedItem={setSelectedItem}
          />
        </DragDropContext>

        <ListComputed
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <ListFilter changeFilter={changeFilter} filter={filter} />
        <DialogComponent
          title="Selected Item"
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        >
          <Container>
            <ItemDialog item={selectedItem} />
          </Container>
        </DialogComponent>
      </Container>
    </MainLayout>
  )
}
