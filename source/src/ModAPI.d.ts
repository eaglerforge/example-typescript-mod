/*
    Modern ModAPI Type Definitions
    Definitions written by: Block_2222(everything else), BendieGames(util), aleixdev(reflect)
    
    EaglerForge/ModAPI by: ZXMushroom63, radmanplays, Leah Anderson(otterdev)
*/

/**
 * A method used in Reflect Class
 * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
 */
declare interface ReflectMethod {
    methodName: string;
    methodNameShord: string;
    method: (...args: any[]) => any;
}

/**
 * A Class made by using ModAPI.reflect
 * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
 */
declare interface ReflectClass {
    binaryName: string | null;
    class: any | null;
    compiledName: string;
    constructors: Function[];
    hasMeta: boolean;
    id: string | null;
    name: string;
    methods: Map<string, ReflectMethod>;
    staticMethods: Record<string, ReflectMethod>;
    staticVariableNames: string[];
    staticVariables: Record<string, any>;
    superclass?: ReflectClass;

    instanceOf(obj: any): boolean;
    getConstructorByArgs(...args: string[]): Function;
}

/**
 * The EaglerForge ModAPI is housed in a global JavaScript object stored on globalThis, called ModAPI or PluginAPI. (both are identical)
 * 
 * It is recommended that you have an Eaglercraft workspace open while you're modding.
 * Alternatively, you can use a vanilla Minecraft JavaDoc like the one below
 * @see {@link https://nurmarvin.github.io/Minecraft-1.8-JavaDocs/overview-summary.html} Vanilla Minecraft JavaDoc
 * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
 */
declare namespace ModAPI {
    /**
     * GNU lmao
     */
    let GNU: string;
    
    /**
     * This boolean is set to true if the eaglerforge client is running on 1.12 
     * ( This is has been added because peyton changed stuff so now some stuff is diffrent for the API  )
     * @example
     * if (ModAPI.is_1_12) {
     *     console.log('You are using eaglerforge on 1.12!');
     * };
     */
    let is_1_12: boolean;
    /**
     * Lets you easily add credits to Eaglercraft’s credits.txt
     * @example
     * ModAPI.addCredit("My Cool Mod", "Username", " - Coded the mod\n - Wrote some credits")
     * @param {string} category Mod/Project's Name
     * @param {string} contributor Name of the contributor
     * @param {string} contents Their contributions to the project
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     * @see {@link https://github.com/eaglerforge}
     */
    function addCredit(category: string, contributor: string, contents: string): void;

    /**
     * Used to register an event handler.
     * @example
     * function myHandler(event) {
     *     console.log(event);
     * }
     * ModAPI.addEventListener("update", myHandler);
     * @param {string} eventName name of the event
     * @param {Function} callback callback function with optional object paramenter
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/events.html} Events Documentation
    */
    function addEventListener(eventName: string, callback: Function): void;

    /**
     * This module is used to interact and create arrays easily.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
     */
    namespace array {
        /**
         * Creates a Java array of a class with the specified size.
         * @param {Class} jclass Java Class
         * @param {number} size
         * @returns {JavaArray<object>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function object(jclass: any, size: number): any;
        /**
         * Converts a JavaScript array of a class to a Java array of a class.
         * @param {Class} jclass Java Class
         * @param {Array<object>} jsarray
         * @returns {JavaArray<object>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function object(jclass: any, jsarray: Array<object>): any;

        /** 
         * Creates a boolean array with the specified size.
         * @param {number} size
         * @returns {JavaArray<boolean>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
        */
        function boolean(size: number): any;
        /**
         * Takes a JavaScript array of booleans (true/false) and converts it into a Java array.
         * @param {Array<boolean>} jsarray
         * @returns {JavaArray<boolean>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function boolean(jsarray: Array<object>): any;

        /**
         * Creates a byte array with the specified size.
         * @param {number} size 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function byte(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java byte array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function byte(jsarray: Array<number>): any;

        /**
         * Creates a char array with the specified size.
         * @param {number} size 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function char(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java char array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function char(jsarray: Array<number>): any;

        /**
         * Creates a short array with the specified size.
         * @param {number} size 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function short(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java short array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function short(jsarray: Array<number>): any;

        /**
         * Creates a int array with the specified size.
         * @param {number} size 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function int(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java int array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function int(jsarray: Array<number>): any;

        /**
         * Creates a float array with the specified size.
         * @param {number} size 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function float(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java float array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function float(jsarray: Array<number>): any;

        /**
         * Creates a double array with the specified size.
         * @param {number} size
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function double(size: number): any;
        /**
         * Takes a JavaScript array of numbers and converts it into a Java double array.
         * @param {Array<number>} jsarray 
         * @returns {JavaArray<number>}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/array.html} Array Documentation
         */
        function double(jsarray: Array<number>): any;
    }
    /**
     * This is a key-value dictionary of all of the blocks in the game. 
     * 
     * It is generated upon init from the static variables of the Blocks class.
     * You can also regenerate this by calling ModAPI.util.bootstrap().
     * 
     * @example <caption>To access the block class for bedrock, you can use:</caption>
     * ModAPI.blocks["bedrock"]
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let blocks: any;
    
    /**
     * Triggers a left click ingame.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    function clickMouse(): void;

    /**
     * This is the dedicated server module, used for modding singleplayer in more powerful ways.
     * This is used to push code for use in the dedicated server.
     * Once the dedicated server worker has started, it is unuseable.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/dedicatedserver.html} Dedicated Server Documentation
     */
    namespace dedicatedServer {
        /**
         * Injects provided code into the dedicated server.
         * Accepts both functions and strings. 
         * @param {Function | string} code 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/dedicatedserver.html} Dedicated Server Documentation
         */
        function appendCode(code: Function | string): void;

        /**
         * Undocumented internals
         */
        let _data: Array<any> | any;

        /**
         * Undocumented internals
         * 
         * My first guess is that this tells you if the integrated server has started at least once.
         * 
         * Take the above with a grain of salt (Block_2222)
         */
        let _wasUsed: boolean | any;
    }

    /**
     * Displays client-side message to user’s ingame chat gui.
     * @example
     * ModAPI.displayToChat("Hello World.")
     * @param {string} message 
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    function displayToChat(message: string): void;

    /**
     * This is a key-value dictionary of all of the enchantments in the game. 
     * 
     * It is generated upon init from the static variables of the Enchantment class.
     * You can also regenerate this by calling ModAPI.util.bootstrap().
     * 
     * @example <caption>To access the enchantment class for knockback, you can use:</caption>
     * ModAPI.enchantments["knockback"]
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let enchantments: any;

    /**
     * Events broadcast data for use in mods.
     * The events global, ModAPI.events, allows you to register new event types and call them.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/events.html} Events Documentation
     */
    namespace events {
        /**
         * You can register new events using ModAPI, as long as the event name starts with custom: (lib: is only useful for library loading).
         * 
         * Library events function differently to normal events, as when they are called once, any new event listener with automatically fire upon being registered.
         * 
         * @example <caption>regular event:</caption>
         * ModAPI.events.newEvent("custom:myevent")
         * @example <caption>lib event:</caption>
         * ModAPI.events.newEvent("lib:mylibrary")
         * @param {string} eventName 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/events.html} Events Documentation
         */
        function newEvent(eventName: string): void;
        
        /**
         * Call an EaglerForge event. Default Eaglerforge events dont have a prefix, custom events have the "custom:" prefix, and library events have the "lib:" prefix.
         * 
         * Library events function differently to normal events, as when they are called once, any new event listener with automatically fire upon being registered.
         * 
         * @example
         * // Mod #1, registers event handler for custom event
         * ModAPI.addEventListener("custom:myevent", (e)=>{
         *     alert(e.secretCode);
         * });
         * // Mod #2, registers and calls custom event
         * ModAPI.events.newEvent("custom:myevent");
         * ModAPI.events.callEvent("custom:myevent", {
         *     secretCode: "1234"
         * });
         * @param {string} eventName 
         * @param {object} data This is the object that is passed to the event listeners callback.
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/events.html} Events Documentation
         */
        function callEvent(eventName: string, data: object): void;

        /**
         * Undocumented internals
         * 
         * Although its pretty obvious what this is.
         * Its an array of strings containing all the currently registered events.
         * 
         * This is not part of the official EaglerForge documentation.
         */
        let types: Array<string>;

        /**
         * Undocumented internals
         */
        let lib_map: any;

        /**
         * Undocumented internals
         */
        let listeners: any;
    }
    /**
     * The flavour of ModAPI. Hardcoded to be "injector".
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let flavour: string;

    /**
     * Undocumented internals
     * 
     * I legit have no idea what this does.
     * 
     * If you do, comment on the "Modern ModAPI Type Definitions" thread in the official EaglerForge Discord Server.
     */
    function freezeCallstack(): void;

    /**
     * Gets the frames per second of the game
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    function getFPS(): number;

    /**
     * If you REALLY need this and cant use anything else from ModAPI, I wish you luck. (Block_2222)
     * 
     * This is the internal hooking map for ModAPI and can be used to patch, intercept, or rewrite internal functions, and more.
     * 
     * ModAPI.hooks is the global generated by actual code.
     * 
     * This has quite a few properties, but most of them are just foundations for more user friendly parts of ModAPI, so they wont have much information.
     * 
     * Most of this is undocumented. if you know more about hooks, please tell me in the "Modern ModAPI Type Definitions" thread in the official EF Discord.
     * 
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/hooks.html} Hooks Documentation
     */
    namespace hooks {
        /**
         * Undocumented internals
         * @param {any} runner idfk what this is
         */
        function TeaVMThread(runner: any): void;

        /**
         * Undocumented internals
         * 
         * What I know is that its related to ModAPI.freezeCallstack()
         */
        let freezeCallstack: boolean;

        //finally something with docs
        /**
         * This is a String-to-method dictionary/object of every Java method. 
         * 
         * This allows you to do pretty much whatever you want in terms of modifying and hooking into code.
         * 
         * You shouldnt need to use hooks unless everything else fails.
         * 
         * I really recomend reading the hooks documentation for more information.
         * 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/hooks.html} Hooks Documentation
         */
        let methods: any;

        /**
         * Undocumented internals
         * 
         * Regenerates the _classMap (duhh)
         */
        function regenerateClassMap(): void;
        /**
         * Undocumented internals
         * 
         * The thing that regenerateClassMap() regenerates
         */
        let _classMap: any;

        //i gave up on guessing what these do after this
        //i dont have infinite time to snoop in ModAPI lmao

        /**
         * Undocumented internals
         */
        let _postInit: any;
        /**
         * Undocumented internals
         */
        let _rippedConstructorKeys: any;

        /**
         * Undocumented internals
         */
        let _rippedConstructors: any;
        /**
         * Undocumented internals
         */
        let _rippedData: any;
        /**
         * Undocumented internals
         */
        let _rippedInterfaceKeys: any;
        /**
         * Undocumented internals
         */
        let _rippedInterfaceMap: any;
        /**
         * Undocumented internals
         */
        let _rippedInternalConstructorKeys: any;
        /**
         * Undocumented internals
         */
        let _rippedInternalConstructors: any;
        /**
         * Undocumented internals
         */
        let _rippedMethodKeys:any;
        /**
         * Undocumented internals
         */
        let _rippedMethodTypeMap: any;
        /**
         * Undocumented internals
         */
        let _rippedStaticIndexer: any;
        /**
         * Undocumented internals
         */
        let _rippedStaticProperties: any;
        /**
         * ModAPI.hooks._teavm is usually only used for internal purposes, but it is basically a collection of every internal TeaVM method.
         * 
         * Keep in mind that this only stores references (for performance reasons), so modifying and editing it’s contents will not affect the way the game runs.
         * 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/hooks.html} Hooks Documentation
         */
        let _teavm: any;
    }

    /**
     * This is a key-value dictionary of all of the items in the game.
     *  
     * It is generated upon init from the static variables of the Items class.
     * You can also regenerate this by calling ModAPI.util.bootstrap().
     * 
     * @example <caption>For example, to access the item class for acacia_door, you can use:</caption>
     * ModAPI.items["acacia_door"]
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let items: any;

    /**
     * This is the raw minecraft instance for the client, generated upon init.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let javaClient: any;

    /**
     * This module is used to get IDs for registering blocks and items without hardcoding an ID.
     * 
     * ModAPI.keygen contains the API for getting numerical item, block and entity IDs from a string.
     * 
     * It looks at registries to derive the IDs, so IDs will not be automatically reserved until something is actually registered into the game.
     * 
     * Ideally, you’d want to call a keygen method just before registering something.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/keygen.html} Keygen Documentation
     */
    namespace keygen {
        /**
         * Generate numerical id for an Item.
         * 
         * @example
         * var id = ModAPI.keygen.item("my_example_item");
         * @param {string} itemId Textual id
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/keygen.html} Keygen Documentation
         */
        function item(itemId: string): void;
        
        /**
         * Generate numerical id for a Block.
         * 
         * @example
         * var id = ModAPI.keygen.block("my_example_block");
         * @param {string} blockId Textual id
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/keygen.html} Keygen Documentation 
         */
        function block(blockId: string): void;

        /**
         * Generate numerical id for an Entity.
         * 
         * @example
         * var id = ModAPI.keygen.entity("my_example_entity");
         * @param {string} entityId Textual id
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/keygen.html} Keygen Documentation
         */
        function entity(entityId: string): void;
    }

    /**
     * This is a key-value dictionary of all of the materials in the game.
     *  
     * It is generated upon init from the static variables of the Material class.
     * You can also regenerate this by calling ModAPI.util.bootstrap().
     * 
     * @example <caption>to access the material class for portal, you can use: </caption>
     * ModAPI.materials["portal"]
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let materials: any;

    /**
     * This is the minecraft instance for the client, generated upon init.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let mc: any;

    /**
     * This is the raw minecraft instance for the client, generated upon init.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let mcinstance: any;

    /**
     * This module is used to register metadata for mods such as their title, credits, icon and description.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
     */
    namespace meta {
        /**
         * Once the client is fully loaded, creates a button in the mod manager GUI that runs the specified function when pressed.
         * @param {Function} callback 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
         */
        function config(callback: Function): void;
        
        /**
         * Sets the credits of the mod. Character limit of 36.
         * @param {string} credits
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation 
         */
        function credits(credits: string): void;

        /**
         * Sets the description of the mod. Character limit of 160.
         * @param {string} desc 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
         */
        function description(desc: string): void;

        /**
         * Sets the icon of the mod.
         * 
         * It can be extremely low res, it will not appear blurry.
         * @param {string} iconURL 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
         */
        function icon(iconURL: string): void;

        /**
         * Sets the title of the mod. Character limit of 16.
         * 
         * This is mandatory if any metadata is to be displayed.
         * @param {string} title 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
         */
        function title(title: string): void;
        /**
         * Sets the version of the mod. Appended after the title.
         * @param {string} ver 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/meta.html} Meta Documentation
         */
        function version(ver: string): void;

        /**
         * Undocumented internals
         */
        let _configMap: any;
        /**
         * Undocumented internals
         */
        let _descriptionMap: any;
        /**
         * Undocumented internals
         */
        let _developerMap: any;
        /**
         * Undocumented internals
         */
        let _iconMap: any;
        /**
         * Undocumented internals
         */
        let _titleMap: any;
        /**
         * Undocumented internals
         */
        let _versionMap: any;
    }

    /**
     * This is the minecraft instance for the client, generated upon init.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let Minecraft: any;

    /**
     * Undocumented internals
     */
    function onUpdate(): void;

    /**
     * Allows running java methods that are @Async/@Async dependent.
     * 
     * Calling async methods in an event or in a patch to a normal function will cause a stack implosion, characterised by the client/dedicated server hanging without any error messages.
     * @param {Method | Constructor} asyncJavaMethod
     * @returns {PromisifiedJavaRunner}
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/promisify.html} Promisify Documentation
     */
    function promisify(asyncJavaMethod: any): any;

    /**
     * ModAPI.reflect supplies a user friendly wrapper for accessing and interacting with java classes from javascript.
     * 
     * This is a wrapper around ModAPI.hooks, ModAPI.hooks._teavm and ModAPI.hooks._classMap that makes accessing and using internal java classes in mods much easier.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
     */
    namespace reflect {
        /**
         * An array of ReflectClasses, representing (almost) every java class.
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        let classes: any;

        /**
         * A map of every class.
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        let classMap: any;
        
        /**
         * This method is used to find a class by its id.
         * 
         * For example, to get the Minecraft class, you can use:
         * 
         * ModAPI.reflect.getClassById("net.minecraft.client.Minecraft")
         * @param {string} classId 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        function getClassById(classId: string): ReflectClass;

        /**
         * This method is used to find a class by its name.
         * 
         * This runs slower than getClassById because it has to filter through all classes. Make sure to cache the result rather than calling it over and over again.
         * 
         * For example, to get the Minecraft class, you can use:
         * 
         * ModAPI.reflect.getClassById("Minecraft")
         * @param {string} className 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        function getClassByName(className : string): ReflectClass;

        /**
         * Gets a super function from a reflect class. This is used to extend built in classes, like Block.
         * 
         * When called without a filter function, the filter defaults to (fn)=>fn.length === 1
         * 
         * See docs for more details.
         * @param {ReflectClass} rClass Class to get Super function
         * @param {Function?} filter Filter function
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        function getSuper(rClass: ReflectClass, filter: (fn: Function) => boolean): Function;

        /**
         * Copies methods from a reflect class and it’s parents onto a target native JavaScript class. 
         * 
         * This allows TeaVM to use these objects normally, without you having to manually reimplement every method. In other words, this is the equivalent of extending a class.
         * @param {ReflectClass} rClass 
         * @param {Class | ConstructorFunction} target 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        function prototypeStack(rClass: ReflectClass, target: any): void;

        /**
         * Marks the provided interface as a supertype of the target class.
         * 
         * JavaScript equivalent of the implements keyword
         * @param {Class | ConstructorFunction} target 
         * @param {ReflectClass} interface 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/reflect.html} Reflect Documentation
         */
        function implements(target: any, interface: ReflectClass): void;
    }

    /**
     * Used to unregister an event handler.
     * @param {string} eventName 
     * @param {Function} callback 
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/events.html} Events Documentation
     */
    function removeEventListener(eventName: string, callback: Function): void;

    /**
     * Import required modules, such as player and network.
     * 
     * @example
     * ModAPI.require("module")
     * @param {string} componentName 
     */
    function require(componentName: string): void;

    /**
     * Undocumented Internals
     */
    let required: any;

    /**
     * Triggers a right click ingame.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    function rightClickMouse(): void;

    /**
     * This is the dedicated minecraft server in the service worker, generated when the serverstart event is fired.
     * 
     * It can only be accessed in the dedicated server’s context. (See ModAPI.dedicatedServer)
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let server: any;

    /**
     * This is the RAW dedicated Minecraft server in the service worker, generated when the serverstart event is fired.
     * 
     * It can only be accessed in the dedicated server’s context. (See ModAPI.dedicatedServer)
     * 
     * It can also be accessed using ModAPI.server.getRef()
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let serverInstance: any;

    /**
     * This is the Minecraft client’s settings. It is generated upon init.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let settings: any;

    /**
     * Undocumented Internals
     * 
     * probably related to freezeCalstack()
     */
    function unfreezeCallstack(): void;

    /**
     * ModAPI.util provides and exposes a large number of utilities for interacting with ModAPI.
     * 
     * Major thanks to BendieGames for locking in and doing these definitions :>
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
     */
    namespace util {
        /**
         * This is the proxy configuration used for exposing ModAPI.items, ModAPI.blocks, ModAPI.enchantments and ModAPI.materials
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        let StaticProps_ProxyConf: any;
        /**
         * This is a non-recursive proxy config for removing prefixes from java objects.
         * 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        let TeaVMArray_To_Recursive_BaseData_ProxyConf: any;
        /**
         * This is a recursive proxy config for removing prefixes from java objects. It handles properties (both object and array) as well as function outputs. Used for ModAPI.player, ModAPI.mc, ModAPI.world, ModAPI.network and more.
         * 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        let TeaVM_to_Recursive_BaseData_ProxyConf: any;
        /**
         * Converts a javascript class to a java class, and the equivalent of using MyClass.class in java.
         * @param {Class} inClass 
         * @returns {JavaClass}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function asClass(inClass: any): any;
        /**
         * Regenerate proxies for ModAPI.items, .blocks, .materials, .enchantments
         * 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function bootstrap(): void;
        /**
         * Gets a block by it’s ID
         * @param {number} id 
         * @returns {Block}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getBlockById(id: number): any;
        /**
         * Gets a item by it’s ID
         * @param {number} id 
         * @returns {Item}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getItemById(id: number): any;
        /**
         * Gets a block from an ItemBlock instance.
         * 
         * @param {Item} item 
         * @returns {Block}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getBlockFromItem(item: any): any;
        /**
         * Undocumented
         */
        function getCompiledName(classId: any): any;
        /**
         * Undocumented
         * 
         * with a side of reverse yeeing
         */
        function getCompiledNameFromPackage(classId: any): any;
        /**
         * Gets the ID of a block
         * @param {Block} block
         * @returns {number}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getIdFromBlock(block: any): any;
        /**
         * Gets an item from a block.
         * @param {Block} block
         * @returns {ItemBlock} 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getItemFromBlock(block: any): any;
        /**
         * Takes a class id (eg: net.minecraft.client.Minecraft) and a method name (eg: middleClickMouse) and returns its key in ModAPI.hooks.methods.
         * @example
         * ModAPI.util.getMethodFromPackage(net.minecraft.client.Minecraft, middleClickMouse)
         * @param {string} classId
         * @param {string} methodName 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getMethodFromPackage(classId: string, methodName: string): string;
        /**
         * Finds the nearest property name to the one you specify (suffix based). This is used to mitigate teavm adding random suffixes to properties.
         * @param {object} object
         * @param {string} property 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function getNearestProperty(object: object, property: string): string;
        /**
         * Returns the hash of a string.
         * @param {string} string 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function hashCode(string: string): string;
         /**
         * Checks whether the thread is in a critical state.
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
         function isCritical(): boolean;
         /**
         * Converts a java string to a javascript string.
         * @param {JavaString} jclString 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
         function jclStrToJsStr(jclString: any): string;
         /**
         * Undocumented
         * 
         * returns a java array btw
         */
         function makeArray(arrayClass: any, arrayContents: Array<any>): any;
         /**
         * Returns a modifies version of a function, where the patcher function can be used to modify the contents of a function.
         * @param {Function} fn 
         * @param {Function} patcherFunction 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
         function modifyFunction(fn: Function, patcherFunction: Function): string;
          /**
         * Writes a new javascript string into the contents of a java string.
         * @param {JavaString} jclString 
         * @param {string} contents 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function setStringContent(jclString: any, contents: string): void;
        /**
         * Converts a javascript string to a java string, for use in java methods and constructors.
         * @param {string} jsString 
         * @returns {JavaString}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function str(jsString: string): any;
        /**
         * Converts a javascript string to a java string, for use in java methods and constructors.
         * @param {string} jsString 
         * @returns {JavaString}
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function string(jsString: string): any;
        /**
         * Encodes a string into a uint16array.
         * @param {string} string 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function stringToUint16Array(string: string): Uint16Array;
         /**
         * Converts a java string to a javascript string.
         * @param {JavaString} jclString 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function unstr(jclString: any): string;
         /**
         * Converts a java string to a javascript string.
         * @param {JavaString} jclString 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function unstring(jclString: any): string;
         /**
         * Converts a java string to a javascript string.
         * @param {JavaString} jclString 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function ustr(jclString: any): string;
        /**
         * Returns a wrapper around native java objects, removing prefixes and fixing method outputs.
         * @param {JavaObject} obj 
         * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/utils.html} Util Documentation
         */
        function wrap(obj: any): object;
     }
    
    /**
     * The version of ModAPI.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let version: string;

    /**
     * Only accessible after ModAPI.require("player") is called, this is the local player entity. It is regenerated every time the update event is called.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let player: any;

    /**
     * Only accessible after ModAPI.require("world") is called, this is the client-side world. It is regenerated every time the update event is called.
     * @see {@link https://eaglerforge.github.io/EaglerForgeInjector/docs/apidoc/} Documentation
     */
    let world: any;

    /**
     * Only accessible after ModAPI.require("network") is called, this is the client’s networking handler. It is regenerated every time the update event is called.
     */
    let network: any; 
}

/**
 * Part of EFI Modloader
 * 
 * Makes an IDBrequest become a promise.
 * @param {IDBRequest} request 
 */
declare function promisifyIDBRequest(request: IDBRequest): Promise<any>;
/**
 * Part of EFI ModLoader
 * 
 * Gets the "EF_MODS" IDB database.
 */
declare function getDatabase():Promise<any>;

/**
 * Part of EFI ModLoader
 * 
 * Gets the mods array (mods.txt)
 */
declare function getMods(): Promise<Array<string>>;
/**
 * Part of EFI ModLoader
 * 
 * Gets the source of a mod
 * @param {string} mod 
 */
declare function getMod(mod: string): Promise<string>;

/**
 * Part of EFI ModLoader
 * 
 * Saves the mods array provided to IDB (mods.txt)
 * @param {Array<string>} mods 
 */
declare function saveMods(mods: Array<string>): Promise<void>;

/**
 * Part of EFI ModLoader
 * 
 * Gets the mod from the url provided and adds it to IDB
 * @param {string} src 
 */
declare function addMod(src: string): Promise<void>;

/**
 * Part of EFI ModLoader
 * 
 * Adds a mod from raw source code
 * @param {string} mod 
 * @param {string} textContents 
 */
declare function addFileMod(mod: string, textContents: string): Promise<void>;

/**
 * Part of EFI ModLoader
 * 
 * Removes the mod at the specified index (of mods.txt)
 * @param {number} index 
 */
declare function removeMod(index: number): Promise<void>;

/**
 * Part of EFI ModLoader
 * 
 * Removes all mods from IDB
 */
declare function resetMods(): Promise<void>;

/**
 * Part of EFI ModLoader
 * 
 * The actual modloader code. Takes in an array of mod identifiers (normally from mods.txt during EFI startup)
 * @param {Array<string>} modsArr 
 */
declare function modLoader(modsArr: Array<string>): Promise<any>;

/**
 * Part of EFI ModGUI
 * 
 * This function gets called to display the mods GUI
 * @param cb not documented
 */
declare function modapi_displayModGui(cb: any): Promise<any>;

/**
 * Part of EFI ModGUI
 * 
 * This is called when the "Add Mod From URL" button is pressed
 */
declare function modapi_addmod(): Promise<void>;

/**
 * Part of EFI ModGUI
 * 
 * This is called when the "Clear All Mods" button is pressed
 */
declare function modapi_clearmods(): Promise<void>;

/**
 * Now with A.I.D.S (automatically injected dedicated server) and H.I.V (Hyper Injected Virtual-debugger)!
 * 
 * This is the code that generates ModAPI and starts EaglerForge
 * 
 * There should be no reason to overide this as its long ran before any mods are loaded
 */
declare function modapi_postinit(): any;

/**
 * Undocumented internals
 * 
 * I really dont know why this is separated from the regular events list
 */
declare let modapi_specialevents: Array<string>;

/**
 * Part of EFI ModGUI
 * 
 * This is called when the "Upload Mod (.js)" button is pressed
 */
declare function modapi_uploadmod(): Promise<void>;

//you scrolled down to see the line count didnt you
