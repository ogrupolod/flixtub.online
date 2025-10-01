
      function atomiShowItems({items}) {
      try {
        items.forEach((item) => {
          const hiddenItem = [...document.querySelectorAll(`#${item}`), ...document.querySelectorAll(`.${item}`)];
          console.log("hiddenItem", hiddenItem)
          if (hiddenItem?.length > 0) {
            hiddenItem.forEach(item => item.classList.remove("atomicat-delay"));
          }
        })
      } catch (error) {
        console.log(error);
      }
      }
    (function() {
          try {
              const clickeventList = [{"compKey":"6e7ced1","misc":{"type":"image"}},{"compKey":"05f74f2","misc":{"type":"image"}},{"compKey":"c7b7c4d","misc":{"type":"image"}},{"compKey":"1a4fd9f","misc":{"type":"image"}},{"compKey":"9324b75","misc":{"type":"image"}},{"compKey":"55dac22","misc":{"type":"image"}},{"compKey":"0d120f5","misc":{"type":"image"}},{"compKey":"1a3eb5a","misc":{"type":"image"}},{"compKey":"4add975","misc":{"type":"image"}},{"compKey":"e36371c","misc":{"type":"button"}},{"compKey":"7ff65ca","misc":{"type":"text"}},{"compKey":"fdf9616","misc":{"type":"text"}}];
    
    
              clickeventList.forEach((comp, index) => {
                  const compKey = comp?.compKey;
                  const eleType = comp?.misc?.type;
                  
                  
                  
                  
                  
                  
              });
    
          } catch (error) {
              return error;
          }
      })();