// export default (
//   targetId: string,
//   hash: string | URL | null | undefined,
//   title: string
// ) => {
//   const options = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0,
//   };

//   const navEl = document.getElementById(targetId + "_nav");
//   const observer = new IntersectionObserver(handleIntersect, options);
//   function handleIntersect(entries: any) {
//     entries.forEach((entry: any) => {
//       if (entry.intersectionRatio > 0) {
//         // window.location.href = ("/#contact")
//         window.history.pushState("page2", title, hash);
//         if (navEl) {
//           let navlinks = document.querySelectorAll("nav a.active");
//           navlinks.forEach((element) => {
//             if (element.id == targetId + "_nav") {
//               return;
//             }
//             // console.log(element.id)
//             element.classList.remove("active");
//           });
//           navEl.classList.add("active");
//         }
//       } else {
//         if (navEl) {
//           navEl.classList.remove("active");
//         }
//       }
//     });
//   }
//   observer.observe(document.getElementById(targetId) as Element);
// };

export default () => {
  console.clear();

  let x = window.innerHeight * 0.5;
  let articleArr = document.querySelectorAll(".sec");

  let io = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("entry", entry);
          let target = entry.target.id;
          document.querySelectorAll(".icc").forEach((n) => {
            if (n) n.classList.remove("active");
          });
          let navTaarget = document.querySelector(`#${target}_nav`);
          if (navTaarget) navTaarget.classList.add("active");

         // window.history.pushState("page2", "target", "/#" + target);
          window.history.replaceState( { id: "100" } , "Page 3","/#" + target); 
        }
      });
    },
    {
      root: null,
      rootMargin: `${-x}px`,
      threshold: 0,
    }
  );

  articleArr.forEach((article) => io.observe(article));
};
