let restaurant={
    name: 'ManMohan',
    guestcapacity:500,
    guestcount:0,
    checkAvailability: function(partysize){
        let seatsleft=this.guestcapacity-this.guestcount
        return partysize<=seatsleft
    },
    seatParty: function(partysize){
        this.guestcount=this.guestcount+partysize
    },
    removeParty: function(partysize){
        this.guestcount=this.guestcount-partysize

    }
}
restaurant.seatParty(480)
console.log(restaurant.checkAvailability(30))
restaurant.removeParty(40)
console.log(restaurant.checkAvailability(30))

