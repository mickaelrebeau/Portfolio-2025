<template>
    <footer id="contact"
        class="min-h-screen flex flex-col justify-center py-20 px-6 bg-(--accent) text-black relative overflow-hidden">

        <div class="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10">
            <div class="flex flex-col justify-between h-full">
                <div>
                    <p class="text-xl font-medium mb-6 uppercase tracking-widest reveal-on-scroll">
                        Prêt à collaborer ?
                    </p>
                    <h2 class="text-4xl md:text-6xl font-black font-syne leading-[0.9] mb-12 reveal-on-scroll">
                        PARLONS<br>PROJET.
                    </h2>
                </div>

                <div class="hidden lg:block space-y-8 reveal-on-scroll delay-100">
                    <div class="flex flex-col gap-2">
                        <span class="text-sm uppercase opacity-60 font-bold tracking-widest">Contact Details</span>
                        <a href="mailto:rebeau.mickael@gmail.com"
                            class="text-2xl font-bold hover:opacity-70 transition-opacity w-fit hoverable">rebeau.mickael@gmail.com</a>
                        <p class="text-2xl font-medium">Reims, France</p>
                    </div>

                    <div class="flex gap-6 text-xl font-bold uppercase pt-8">
                        <a href="https://linkedin.com/in/mickael-rebeau" target="_blank"
                            class="hover:scale-110 transition-transform hoverable inline-block">Linkedin</a>
                        <a href="https://github.com/mickaelrebeau" target="_blank"
                            class="hover:scale-110 transition-transform hoverable inline-block">Github</a>
                        <a href="https://instagram.com" target="_blank"
                            class="hover:scale-110 transition-transform hoverable inline-block">Instagram</a>
                    </div>
                </div>
            </div>

            <div class="flex flex-col justify-center reveal-on-scroll delay-200">
                <form @submit.prevent="submitForm" class="space-y-8 md:space-y-12">
                    <div class="group relative">
                        <label class="block text-xs uppercase font-bold tracking-widest mb-2 opacity-60">Votre
                            Nom</label>
                        <input type="text" v-model="form.name" required placeholder="John Doe"
                            class="w-full bg-transparent border-b-2 border-black/10 py-4 text-2xl md:text-4xl font-syne font-bold placeholder:text-black/20 focus:border-black focus:outline-none transition-all duration-500 hover:border-black/40"
                            :class="{ 'border-red-500': errors.name }" />
                        <span v-if="errors.name" class="text-red-500 text-sm mt-2 block font-medium">{{ errors.name
                            }}</span>
                    </div>

                    <div class="group relative">
                        <label class="block text-xs uppercase font-bold tracking-widest mb-2 opacity-60">Votre
                            Email</label>
                        <input type="email" v-model="form.email" required placeholder="john@example.com"
                            class="w-full bg-transparent border-b-2 border-black/10 py-4 text-2xl md:text-4xl font-syne font-bold placeholder:text-black/20 focus:border-black focus:outline-none transition-all duration-500 hover:border-black/40"
                            :class="{ 'border-red-500': errors.email }" />
                        <span v-if="errors.email" class="text-red-500 text-sm mt-2 block font-medium">{{ errors.email
                            }}</span>
                    </div>

                    <div class="group relative">
                        <label class="block text-xs uppercase font-bold tracking-widest mb-2 opacity-60">Votre
                            Message</label>
                        <textarea v-model="form.message" required placeholder="Parlez-moi de votre projet..." rows="1"
                            class="w-full bg-transparent border-b-2 border-black/10 py-4 text-2xl md:text-4xl font-syne font-bold placeholder:text-black/20 focus:border-black focus:outline-none transition-all duration-500 hover:border-black/40 resize-none min-h-[100px]"
                            :class="{ 'border-red-500': errors.message }" @input="autoResize"></textarea>
                        <span v-if="errors.message" class="text-red-500 text-sm mt-2 block font-medium">{{
                            errors.message }}</span>
                    </div>

                    <div v-if="errorMessage"
                        class="flex items-center gap-2 text-red-500 font-bold bg-red-500/10 p-4 rounded-lg">
                        <AlertCircle class="w-5 h-5 shrink-0" />
                        <p>{{ errorMessage }}</p>
                    </div>

                    <button type="submit" :disabled="isSubmitting"
                        class="mt-8 px-12 py-6 bg-black text-white rounded-full text-xl font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 hoverable w-full md:w-auto flex items-center justify-center gap-4 group disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed">
                        <span v-if="!isSubmitting">Envoyer le message</span>
                        <span v-else>Envoi en cours...</span>
                        <Send v-if="!isSubmitting"
                            class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <p class="text-lg font-bold animate-fade-in flex items-center gap-2">
                        <CheckCircle v-if="successMessage" class="w-6 h-6" />
                        {{ successMessage || '' }}
                    </p>
                </form>
            </div>

            <div class="lg:hidden mt-8 space-y-8 reveal-on-scroll">
                <div class="h-px w-full bg-black/10"></div>
                <div>
                    <a href="mailto:rebeau.mickael@gmail.com"
                        class="text-xl font-bold block mb-2">rebeau.mickael@gmail.com</a>
                    <p class="text-lg">Reims, France</p>
                </div>
                <div class="flex gap-6 text-lg font-bold uppercase">
                    <a href="https://linkedin.com/in/mickael-rebeau" target="_blank">Li.</a>
                    <a href="https://github.com/mickaelrebeau" target="_blank">Gh.</a>
                    <a href="https://instagram.com" target="_blank">Ig.</a>
                </div>
                <div class="text-sm opacity-50">
                    © 2025 Mickael Rébeau. All Rights Reserved.
                </div>
            </div>
        </div>

        <div
            class="absolute -bottom-1/4 -right-1/4 w-[80vw] h-[80vw] border border-black/5 rounded-full pointer-events-none animate-pulse-slow">
        </div>
        <div
            class="absolute top-1/4 -left-1/4 w-[60vw] h-[60vw] border border-black/5 rounded-full pointer-events-none">
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { Send, CheckCircle, AlertCircle } from 'lucide-vue-next'
import { z } from 'zod'

const contactSchema = z.object({
    name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
    email: z.string().email('Adresse email invalide'),
    message: z.string().min(10, 'Le message doit contenir au moins 10 caractères')
})

const form = ref({
    name: '',
    email: '',
    message: ''
})

const errors = reactive<Record<string, string>>({})
const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const autoResize = (e: Event) => {
    const target = e.target as HTMLTextAreaElement
    target.style.height = 'auto'
    target.style.height = target.scrollHeight + 'px'
}

const submitForm = async () => {
    Object.keys(errors).forEach(key => delete errors[key])
    errorMessage.value = ''
    successMessage.value = ''

    const result = contactSchema.safeParse(form.value)
    if (!result.success) {
        result.error.issues.forEach(issue => {
            const path = issue.path[0] as string
            errors[path] = issue.message
        })
        return
    }

    isSubmitting.value = true

    try {
        const response = await fetch('/api/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(form.value),
        })

        const data = await response.json()

        if (!response.ok) {
            throw new Error(data.message || 'Une erreur est survenue lors de l\'envoi.')
        }

        successMessage.value = 'Message envoyé avec succès ! Je reviens vers vous très vite.'
        form.value = { name: '', email: '', message: '' }

        setTimeout(() => {
            successMessage.value = ''
        }, 5000)
    } catch (e: any) {
        errorMessage.value = e.message || 'Erreur de connexion. Veuillez réessayer.'
    } finally {
        isSubmitting.value = false
    }
}
</script>
