<template>
    <footer id="contact"
        class="h-screen flex flex-col justify-between pt-32 pb-10 px-6 bg-(--accent) text-black relative overflow-hidden">
        <div class="container mx-auto z-10">
            <p class="text-xl md:text-2xl font-medium mb-8 uppercase tracking-widest reveal-on-scroll">
                Prêt à lancer votre prochain projet ?
            </p>
            <a href="mailto:rebeau.mickael@gmail.com"
                class="text-[8vw] leading-[0.9] font-black font-syne hover:text-white transition-colors duration-300 block hoverable reveal-on-scroll">
                PARLONS<br>ENSEMBLE.
            </a>
        </div>

        <div class="container mx-auto z-10 flex flex-col md:flex-row justify-between items-end gap-8">
            <div class="text-lg font-medium">
                <p>rebeau.mickael@gmail.com</p>
                <p>France, Reims</p>
            </div>

            <div class="flex gap-6 text-xl font-bold uppercase">
                <a href="https://linkedin.com/in/mickael-rebeau" target="_blank"
                    class="hover:underline hoverable">Linkedin</a>
                <a href="https://github.com/mickaelrebeau" target="_blank" class="hover:underline hoverable">Github</a>
                <a href="https://instagram.com" target="_blank" class="hover:underline hoverable">Instagram</a>
            </div>

            <div class="text-sm opacity-50">
                © 2025 Mickael Rébeau. All Rights Reserved.
            </div>
        </div>

        <div
            class="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 w-[80vw] h-[80vw] border-100 border-black/5 rounded-full pointer-events-none"></div>
    </footer>
</template>
