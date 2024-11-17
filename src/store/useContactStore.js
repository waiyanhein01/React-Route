import React from 'react'
import { create } from 'zustand'

const useContactStore = create((set) => ({
contactType:'',
contactValue:'',
setContact: (contactType,contactValue) => set({contactType,contactValue}),
}))

export default useContactStore
