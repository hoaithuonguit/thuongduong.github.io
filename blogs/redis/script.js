document.addEventListener("DOMContentLoaded", () => {
  const toc = document.getElementById("toc");
  const headers = document.querySelectorAll("h2");

  headers.forEach((header, index) => {
    const id = "section-" + index;
    header.id = id;

    const link = document.createElement("a");
    link.href = "#" + id;
    link.textContent = header.textContent;

    const div = document.createElement("div");
    div.appendChild(link);

    toc.appendChild(div);
  });
});
