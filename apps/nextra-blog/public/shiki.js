shiki
  .getHighlighter({
    theme: "nord",
  })
  .then((highlighter) => {
    const code = highlighter.codeToHtml(`console.log('shiki');`, {
      lang: "js",
    });
    document.getElementById("output").innerHTML = code;
  });
