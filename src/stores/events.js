import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
const events = ref([
    {
        name:"Community Outreach at Northern Kenya",
        image:"../../public/jadon-johnson-zw6QvSggqGU-unsplash.jpg",
        date:"July 6th 2025",
        location:"Northern Kenya School",
        category:"Community Outreach"
    },
    {
        name:"Chipukizi Tournament",
        image:"../../public/my-profit-tutor-56E9vIuok_o-unsplash.jpg",
        date:"August 2nd 2025",
        location:"Starthmore University",
        category:"Sports"
    },
    {
        name:"Camp",
        image:"../../public/jonathan-forage-1azAjl8FTnU-unsplash.jpg",
        date:"August 22nd 2025",
        location:"Uhuru Camp",
        category:"Clubs"
    },
    {
        name:"ICT coding competitions ",
        image:"../../public/tai-bui-d2UbZWIcIJo-unsplash.jpg",
        date:"September 15th 2025",
        location:"USIU",
        category:"Clubs"
    }
])

  return { events }
})
