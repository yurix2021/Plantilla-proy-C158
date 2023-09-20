AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" },
  },
  init: function () {
    // Llama a la función handleMouseEnterEvents

    this.handleMouseLeaveEvents();
  },  
  handleMouseEnterEvents: function () {
    // Evento 'mouseenter' del cursor.




  },
  handleMouseLeaveEvents: function () {
    // Evento 'mouseleave' del cursor.
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data;
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`);
        const id = el.getAttribute("id");
        if (id == selectedItemId) {
          el.setAttribute("material", { color: "#fff" });
        }
      }
    });
  },
  
});
