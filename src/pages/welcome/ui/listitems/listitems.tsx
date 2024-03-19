import { Item } from '@/pages/welcome/ui/item'
import { ListPagination } from '@/pages/welcome/ui/listpagination'
import { Draggable, Droppable } from '@hello-pangea/dnd'
import { useState } from 'react'

const ITEMS_PER_PAGE = 5 // Number of items per page
export const ListItems = ({
  items,
  removeItem,
  updateItem,
  setIsOpen,
  setSelectedItem,
}) => {
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSelected, setPageSelected] = useState('first')
  const totalItems = items.length
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE)

  const startIndex = currentPage * ITEMS_PER_PAGE
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, items.length)
  const visibleItems = items.slice(startIndex, endIndex)
  const pageDetails = `Page ${currentPage + 1} of ${totalPages}`
  const goToPage = (page) => {
    setPageSelected(page)
    switch (page) {
      case 'last':
        setCurrentPage(totalPages - 1)
        break
      case 'prev':
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 0))
        break
      case 'next':
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1))
        break
      default:
        setCurrentPage(0)
    }
  }

  return (
    <Droppable droppableId="items">
      {(droppableProvided) => (
        <div
          ref={droppableProvided.innerRef}
          {...droppableProvided.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
        >
          {visibleItems.map((item, index) => (
            <Draggable
              key={item.datetime}
              index={index}
              draggableId={`${item.datetime}`}
            >
              {(draggableProvided) => (
                <Item
                  item={item}
                  setIsOpen={setIsOpen}
                  setSelectedItem={setSelectedItem}
                  removeItem={removeItem}
                  updateItem={updateItem}
                  ref={draggableProvided.innerRef}
                  {...draggableProvided.dragHandleProps}
                  {...draggableProvided.draggableProps}
                />
              )}
            </Draggable>
          ))}

          {droppableProvided.placeholder}

          <ListPagination
            gotoPage={goToPage}
            page={pageSelected}
            pageDetails={pageDetails}
          />
        </div>
      )}
    </Droppable>
  )
}
