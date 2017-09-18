module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        // "browser": true,
        "camelcase": true,
        "eqeqeq": true,
        "eqnull": true,
        "indent": 2,
        "jquery": true,
        "latedef": true,
        "maxlen": 80,
        "newcap": true,
        "node": true,
        "quotmark": "single",
        "strict": true,
        "trailing": true,
        "undef": true,
        "unused": true,
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "spaces"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ]
    }
};

// module.exports = {
//     "user": {
//         "debug": false,
//         "delay": 0.25,
//         "error_color": "D02000",
//         "gutter_theme": "Packages/SublimeLinter/gutter-themes/Hands/Hands.gutter-theme",
//         "gutter_theme_excludes": [],
//         "lint_mode": "load/save",
//         "linters": {
//             "eslint": {
//                 "@disable": false,
//                 "args": [],
//                 "excludes": []
//             },
//             "jshint_options": {
//                 "browser": true,
//                 "camelcase": true,
//                 "eqeqeq": true,
//                 "eqnull": true,
//                 "indent": 2,
//                 "jquery": true,
//                 "latedef": true,
//                 "maxlen": 80,
//                 "newcap": true,
//                 "node": true,
//                 "quotmark": "single",
//                 "strict": true,
//                 "trailing": true,
//                 "undef": true,
//                 "unused": true
//             }
//         },
//         "mark_style": "squiggly underline",
//         "no_column_highlights_line": false,
//         "passive_warnings": false,
//         "paths": {
//             "linux": [],
//             "osx": [],
//             "windows": []
//         },
//         "python_paths": {
//             "linux": [],
//             "osx": [],
//             "windows": []
//         },
//         "rc_search_limit": 3,
//         "shell_timeout": 10,
//         "show_errors_on_save": false,
//         "show_marks_in_minimap": true,
//         "syntax_map": {
//             "html (django)": "html",
//             "html (rails)": "html",
//             "html 5": "html",
//             "javascript (babel)": "javascript",
//             "magicpython": "python",
//             "php": "html",
//             "python django": "python",
//             "pythonimproved": "python"
//         },
//         "warning_color": "DDB700",
//         "wrap_find": true
//     }
// }
