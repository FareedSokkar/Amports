/**=================================================
 *                                                  |
 *                                                  |
 *             Enviroment related paths             |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: which ip to use the user of master
 * name: the name which you want to appear in the "button"
 * path: the defined path of the env -> http://{ip}/{path}
 */

let personalPath = [
    { id: 'search', ip: "master", name: "search cats", path: "search?q=cats" },
];





/**=================================================
 *                                                  |
 *                                                  |
 *             Universal Tools                      |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: external
 * name: the name which you want to appear in the "button"
 * path: the defined path of the tool -> http://{path}
 */
const personalTools = [
    { id: 'search', ip: "master", name: "search cats", path: "search?q=cats" },

    {
        id: 'coolors',
        ip: "external",
        name: "coolors",
        path: "coolors.co/palettes/trending",
        icon: "https://coolors.co/assets/img/favicon.png"
    },
    {
        id: 'fontawesome',
        ip: "external",
        name: "font awesome",
        path: "fontawesome.com/v4.7/",
        icon: "https://fontawesome.com/v4.7/assets/ico/favicon.ico"
    },
];



/**=================================================
 *                                                  |
 *                                                  |
 *             Personalized Tools                   |
 *                                                  | 
 *                                                  | 
 * ================================================*/
/**
 * id: special id to append to the item added
 * ip: gt_block/gt_build
 * name: the name which you want to appear in the "button"
 * path: the key in the innerHtml variable
 */
const personalGt_tools = [
    {
        id: 'calculator',
        ip: "gt_block",
        name: "calculator",
        path: "calculator"
    },
    {
        id: 'contact',
        ip: "gt_build",
        name: "contact",
        path: "contact",
        icon: "data:image/png;base64,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"
    },
];

// Note: when creating css take toggle_[id] as the root so you won't break the extension layout

const personalInnerHtml_block = {
    "calculator": {
        "pre_script": "",
        "css": "@import url(https://fonts.googleapis.com/css2?family=Orbitron&display=swap);#toggle_calculator .calculator{padding:10px;border-radius:1em;height:380px;width:400px;margin:auto;background-color:#191b28;box-shadow:rgba(0,0,0,.19) 0 10px 20px,rgba(0,0,0,.23) 0 6px 6px}#toggle_calculator .display-box{font-family:Orbitron,sans-serif;background-color:#dcdbe1;border:solid #000 .5px;color:#000;border-radius:5px;width:100%;height:65%}#toggle_calculator .button{font-family:Orbitron,sans-serif;background-color:#64278f;color:#fff;border:solid #000 .5px;width:100%;border-radius:5px;height:70%;outline:0}#toggle_calculator .button:active{background:#e5e5e5;-webkit-box-shadow:inset 0 0 5px #c1c1c1;-moz-box-shadow:inset 0 0 5px #c1c1c1;box-shadow:inset 0 0 5px #c1c1c1}",
        "html": '<table class="calculator"> <tr> <td colspan="3"> <input class="display-box" type="text" id="result" disabled/> </td><td> <input id="clear" class="button" type="button" value="C" style="background-color: #fb0066;"/> </td></tr><tr> <td> <input class="button" type="button" value="1"/> </td><td> <input class="button" type="button" value="2"/> </td><td> <input class="button" type="button" value="3"/> </td><td> <input class="button" type="button" value="/"/> </td></tr><tr> <td> <input class="button" type="button" value="4"/> </td><td> <input class="button" type="button" value="5"/> </td><td> <input class="button" type="button" value="6"/> </td><td> <input class="button" type="button" value="-"/> </td></tr><tr> <td> <input class="button" type="button" value="7"/> </td><td> <input class="button" type="button" value="8"/> </td><td> <input class="button" type="button" value="9"/> </td><td> <input class="button" type="button" value="+"/> </td></tr><tr> <td> <input class="button" type="button" value="."/> </td><td> <input class="button" type="button" value="0"/> </td><td> <input id="calculate" class="button" type="button" value="=" style="background-color: #fb0066;"/> </td><td> <input class="button" type="button" value="*"/> </td></tr></table>',
        "post_script": "calculator.js"
    },
};

const personalInnerHtml_build = {
    "contact": [
        {
            "tag": "h2",
            "attributes": {},
            "text": "Cat"
        },
        {
            "tag": "img",
            "attributes": {
                "src": 'https://i.cbc.ca/1.5256404.1566499707!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/cat-behaviour.jpg'
                , "width": "300"
            }
        },
        {
            "tag": "p",
            "attributes": {},
            "text": "Hi my name is Kitty the Cat!"
        },
    ],
}
// Concat configuration
function concatConfiguration(){
    paths = paths.concat(personalPath);
    tools = tools.concat(personalTools);
    gt_tools = gt_tools.concat(personalGt_tools);
    innerHtml_block = {...innerHtml_block,...personalInnerHtml_block};
    innerHtml_build = {...innerHtml_build,...personalInnerHtml_build};
}

concatConfiguration();