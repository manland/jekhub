//TODO :
// * add member with pseudo instead test (in file name)
// * check not repo member pb
// * add idea
// * add problem

var Jekhub = (function() {

	var reponame = "manland";
	var projectname = "jekhub";

	function createPrompt(innerHTML) {
		var prompt = document.createElement("div");
		prompt.style.position = "fixed";
		prompt.style.top = 0;
		prompt.style.width = "100%";
		prompt.style.height = "100%";
		prompt.style.backgroundColor = "rgba(0,0,0,0.85)";
		prompt.style.textAlign = "center";
		prompt.style.paddingTop = "10%";
		prompt.style.color = "#fff";
		prompt.style.verticalAlign = "top";
		prompt.innerHTML = innerHTML;
		return prompt;
	}

	function cleanQuote(text) {
		return text.split("\"").join("");
	}

	function trim(text) {
		return text.replace(/^\s+|\s+$/g, '');
	}

	function addQuote(text) {
		text = trim(text);
		if(text.charAt(0) !== "[" && text !== "") {
			text = "\"" + text + "\"";
		}
		return text;
	}

	function splitData(data) {
		var res = {};
		var lines = data.split("\n");
		var firstTripleDash = true;
		for (var i = 0; i < lines.length; i++) {
			if(lines[i] === "---") {
				if(firstTripleDash === true) {
					firstTripleDash = false;
				} else {
					res.content = lines.splice(i+1, lines.length).join("\n");
				}
			} else {
				var line = lines[i].split(":");
				var name = line[0];
				var value = line.slice(1, line.length).join(":");
				console.log(name, value);
				name = trim(cleanQuote(name));
				value = trim(cleanQuote(value));
				res[name] = value;
			}
		};
		return res;
	}

	function showForm(repo, path, object) {
		var promptString = '';
		for(var key in object) {
			if(key !== "content") {
				promptString += key + ' : <input id="input'+key+'" type="text" value="'+object[key]+'" /><br />';
			} else {
				promptString += key + ' : <textarea rows="4" cols="50" id="input'+key+'">'+object[key]+'</textarea><br />';
			}
		}
		promptString += 'Commit summary : <textarea rows="4" cols="50" id="inputCommit">Update of '+path+'</textarea><br />'
		promptString += '<input id="cancelForm" type="button" value="Cancel" />';
		promptString += '<input id="validateForm" type="button" value="Ok" /><br /><br />';
		promptString += '<input id="deleteToken" type="button" value="Delete token" />';
		var prompt = createPrompt(promptString);
		document.body.appendChild(prompt);
		document.getElementById("validateForm").onclick = function() {
			var toCommit = "---\n";
			for(var key in object) {
				if(key !== "content") {
					var newValue = document.getElementById('input'+key).value;
					newValue = key === "layout" ? newValue : addQuote(newValue);
					toCommit += key + ' : ' + newValue + "\n";
				}
			}
			toCommit += "---\n";
			if(object.content !== ""){
				toCommit += object.content;
			}
			var commitSummary = document.getElementById('inputCommit').value;
			document.body.removeChild(prompt);
			console.log(toCommit);
			repo.write('gh-pages', path, toCommit, commitSummary, function(err) {
				console.log(err);
			});
		}
		document.getElementById("cancelForm").onclick = function() {
			document.body.removeChild(prompt);
		}
		document.getElementById("deleteToken").onclick = function() {
			localStorage.removeItem("token");
			document.body.removeChild(prompt);
		}
	}

	function editPage(token, path) {
		var github = new Github({
		  token: token
		});
		var repo = github.getRepo(reponame, projectname);
		repo.read("gh-pages", path, function(err, data) {
			if(!err && data) {
				showForm(repo, path, splitData(data));
			} else {
				localStorage.removeItem("token");
				showPromptToken(path);
			}
		});
	}

	function showPromptToken(callback) {
		var prompt = createPrompt('Token : <input id="inputToken" type="text" /><input id="cancelToken" type="button" value="Cancel" /><input id="validateToken" type="button" value="Ok" />');
		document.body.appendChild(prompt);
		document.getElementById("validateToken").onclick = function() {
			var token = document.getElementById("inputToken").value;
			localStorage['token'] = token;
			document.body.removeChild(prompt);
			callback(token);
		}
		document.getElementById("cancelToken").onclick = function() {
			document.body.removeChild(prompt);
		}
	}

	return {
		editPage: function(path) {
			if(localStorage) {
				var token = localStorage['token'];
				if(token) {
					editPage(token, path);
				} else {
					showPromptToken(function(token) {
						editPage(token, path);
					});
				}
			} else {
				window.alert("Your browser doesn't support localStorage !");
			}
		},
		addMember: function() {
			if(localStorage) {
				var token = localStorage['token'];
				if(token) {
					var github = new Github({
					  token: token
					});
					var repo = github.getRepo(reponame, projectname);
					var form = {
						layout:"membres",
						categories:"[membres]",
						pseudo:"pseudo",
						bio:"description",
						photo:"url",
						github:"url",
						facebook:"url",
						twitter:"url",
						viadeo:"url",
						linkedin:"url",
						googleplus:"url",
						blog:"url"
					}
					showForm(repo, "_posts/membres/2013-10-26-test.md", form);
				} else {
					showPromptToken(function(token) {
						showForm(repo, "_posts/membres/2013-10-26-test.md", form);
					});
				}
			} else {
				window.alert("Your browser doesn't support localStorage !");
			}
		}
	}
})();