<script lang="ts">

    // --- Logic ---
    import { cn } from '@lib/utils';
    import type { Props } from ".."
    
    let {
        children,
        class: className,
        inputClass = $bindable('border-solid border-[#e0e0e2] rounded-3 px-3 py-4 w-full font-poppins'),
        label = $bindable(undefined),

        ...rest
    }: Props = $props();


    // Setup Input's class

    let inputCls = $state(cn(inputClass, className));
    $effect(() => {
        inputCls = cn(inputClass, className)
    })

</script>


{#if label !== undefined} 
    <label for={rest.id}>{label}</label>
{/if}

<input class={inputCls} {...rest}/>


