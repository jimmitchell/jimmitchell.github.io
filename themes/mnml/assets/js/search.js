(function () {
	var container = document.getElementById("pagefind-search");

	if (!container) {
		return;
	}

	// pagefind-ui.js only exists once the site has been indexed, so it is
	// missing under a plain `hugo server`.
	if (typeof PagefindUI === "undefined") {
		var note = document.createElement("p");
		note.className = "search-unavailable";
		note.textContent = container.dataset.unavailable;
		container.appendChild(note);
		return;
	}

	var ui = new PagefindUI({
		element: "#pagefind-search",
		bundlePath: container.dataset.bundlePath,
		pageSize: parseInt(container.dataset.pageSize, 10) || 5,
		showImages: false,
		showSubResults: true,
		autofocus: true
	});

	// Support links like /search/?q=hugo.
	var q = new URLSearchParams(window.location.search).get("q");
	if (q) {
		ui.triggerSearch(q);
	}
})();
