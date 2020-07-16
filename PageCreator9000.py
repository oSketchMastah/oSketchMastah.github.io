def printFileNav(filepath):
    pageName = filepath.split('.')[0].split('/')[-1]
    indexPath = "../" * (len(filepath.split('.')[0].split('/')) - 1)
    interfacePath =  "../" * (len((filepath.split('.'))[0].split('/')) -  2)
    print("""<!DOCTYPE html>
<html>
<!-- ******************************************************************** Head ********************************************************************** -->\n\
<head>
	<title>""" + pageName + """</title>
	<meta charset="utf-8\">
  	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
	
	<!-- Import for using MathJax (for Latex Math) -->
	<script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>
  	<script id=\"MathJax-script\" async
        	src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>
	
	<link rel=\"stylesheet" href=\"""" + interfacePath + """DefaultStyle.css\">
	<link rel=\"shortcut icon\" href=\"""" + indexPath + """favicon.png\">
</head>
<!-- ******************************************************************** Body ********************************************************************** -->\n\
<body>\n\
	<nav class=\"topnav\">\n\
		<div class=\"navClassCont\">\n\
			<a> Navigate </a>\n\
			<div class=\"dropTopNav\">\n\
				<a href=\"""" + interfacePath + """MathInterface.html\"> Mathematics </a>\n\
				<a href=\"""" + interfacePath + """CompSciInterface.html\"> Computers and Programming </a>\n\
				<a href=\"""" + interfacePath + """LanguageInterface.html\"> Language and Communications </a>\n\
				<a href=\"""" + interfacePath + """NatSciInterface.html\"> Natural Sciences </a>\n\
			</div>\n\
		</div>\n\
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """MathInterface.html\"> Math </a>
			<div class="dropTopNav" id="dtn-math">
				<a href=\"""" + interfacePath + """Math/Logic.html\"> Logic and Proof </a>
				<a href=\"""" + interfacePath + """Math/Algebras.html\"> Algebras - Objects, Numbers, & Systems </a>
				<a href=\"""" + interfacePath + """Math/Calculus.html\"> Calculus - Advanced Structures </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """CompSciInterface.html"> CompSci </a>
			<div class="dropTopNav" id="dtn-cs">
				<a href=\"""" + interfacePath + """CompSci/LangLibInterface.html"> Programming Language Library </a>
				<a href=\"""" + interfacePath + """CompSci/ConceptInterface.html"> Concepts and Vocabulary </a>
				<a href=\"""" + interfacePath + """CompSci/HowToInterface.html"> Walkthroughs & How to's </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """LanguageInterface.html"> Language </a>
			<div class="dropTopNav" id="dtn-lang">
				<a href=\"""" + interfacePath + """Language/StandardsAbstractions.html"> Standards and Abstractions </a>
				<a href=\"""" + interfacePath + """Language/LangLib.html"> Language Library </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """NatSciInterface.html"> Science </a>
			<div class="dropTopNav" id="dtn-sci">
				<a href=\"""" + interfacePath + """NatSci/MetaInterface.html"> Reasoning about Reasoning </a>
				<a href=\"""" + interfacePath + """NatSci/PhysicsInterface.html"> Physics </a>
				<a href=\"""" + interfacePath + """NatSci/ChemistryInterface.html"> Chemistry </a>
				<a href=\"""" + interfacePath + """NatSci/BiologyInterface.html"> Biology </a>
				<a href=\"""" + interfacePath + """NatSci/EngineeringInterface.html"> Engineering </a>
			</div>
		</div>
   </nav>
	<div class="main_title">
	<h1>""" + pageName + """</h1>
	</div>
	<p> Under Construction! </p>

</body>
<!-- *********************************************************************************************************************************************** -->
</html>""")
#KI/Language/LangLibrary/Chinese.html
def createFile(filepath):
    pageName = filepath.split('.')[0].split('/')[-1]
    indexPath = "../" * (len(filepath.split('.')[0].split('/')) - 1)
    interfacePath =  "../" * (len((filepath.split('.'))[0].split('/')) -  2)
    with open(filepath, 'w') as f:
        f.write("""<!DOCTYPE html>
<html>
<!-- ******************************************************************** Head ********************************************************************** -->\n\
<head>
	<title>""" + pageName + """</title>
	<meta charset="utf-8\">
  	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
	
	<!-- Import for using MathJax (for Latex Math) -->
	<script src=\"https://polyfill.io/v3/polyfill.min.js?features=es6\"></script>
  	<script id=\"MathJax-script\" async
        	src=\"https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js\"></script>
	
	<link rel=\"stylesheet" href=\"""" + interfacePath + """DefaultStyle.css\">
	<link rel=\"shortcut icon\" href=\"""" + indexPath + """favicon.png\">
</head>
<!-- ******************************************************************** Body ********************************************************************** -->\n\
<body>\n\
	<nav class=\"topnav\">\n\
		<div class=\"navClassCont\">\n\
			<a> Navigate </a>\n\
			<div class=\"dropTopNav\">\n\
				<a href=\"""" + interfacePath + """.html\"> Mathematics </a>\n\
			</div>\n\
		</div>\n\
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """MathInterface.html\"> Math </a>
			<div class="dropTopNav" id="dtn-math">
				<a href=\"""" + interfacePath + """Math/Logic.html\"> Logic and Proof </a>
				<a href=\"""" + interfacePath + """Math/Algebras.html\"> Algebras - Objects, Numbers, & Systems </a>
				<a href=\"""" + interfacePath + """Math/Calculus.html\"> Calculus - Advanced Structures </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """CompSciInterface.html"> CompSci </a>
			<div class="dropTopNav" id="dtn-cs">
				<a href=\"""" + interfacePath + """CompSci/LangLibInterface.html"> Programming Language Library </a>
				<a href=\"""" + interfacePath + """CompSci/ConceptInterface.html"> Concepts and Vocabulary </a>
				<a href=\"""" + interfacePath + """CompSci/HowToInterface.html"> Walkthroughs & How to's </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """LanguageInterface.html"> Language </a>
			<div class="dropTopNav" id="dtn-lang">
				<a href=\"""" + interfacePath + """Language/StandardsAbstractions.html"> Standards and Abstractions </a>
				<a href=\"""" + interfacePath + """Language/LangLib.html"> Language Library </a>
			</div>
		</div>
		<div class="navClassCont"> 
			<a href=\"""" + interfacePath + """NatSciInterface.html"> Science </a>
			<div class="dropTopNav" id="dtn-sci">
				<a href=\"""" + interfacePath + """NatSci/MetaInterface.html"> Reasoning about Reasoning </a>
				<a href=\"""" + interfacePath + """NatSci/PhysicsInterface.html"> Physics </a>
				<a href=\"""" + interfacePath + """NatSci/ChemistryInterface.html"> Chemistry </a>
				<a href=\"""" + interfacePath + """NatSci/BiologyInterface.html"> Biology </a>
				<a href=\"""" + interfacePath + """NatSci/EngineeringInterface.html"> Engineering </a>
			</div>
		</div>
   </nav>
	<div class="main_title">
	<h1>""" + pageName + """</h1>
	</div>
	<p> Under Construction! </p>

</body>
<!-- *********************************************************************************************************************************************** -->
</html>""")

#printFileNav("KI/CompSci/WhatToKnow/WebProgramming.html")
createFile("KI/CompSci/WhatToKnow/LowLevel.html")

