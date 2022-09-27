(() => {
    const refs = {
      openvideomodalBtn: document.querySelector("[data-modal-open1]"),
      closevideomodalBtn: document.querySelector("[data-modal-1close]"),
      videomodal: document.querySelector("[data-modal1]"),
    };
  
    refs.openvideomodalBtn.addEventListener("click", toggleModal);
    refs.closevideomodalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.videomodal.classList.toggle("is-hidden");
    }
  })();