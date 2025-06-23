<script lang="ts">
  export let id = '';
  export let name = '';
  export let placeholder = 'Click above me to upload an image!';
  export let dataURI: string = ''; // bindable
  import Input from "../input/components/input.svelte";
  let inputPlaceholder = placeholder;

  function handleFileChange(event: Event) {
  const input = event.target as HTMLInputElement;
  const file = input?.files?.[0];

  if (!file) {
    dataURI = '';
    inputPlaceholder = placeholder;
    return;
  }

  if (/^image\//.test(file.type)) {
    const reader = new FileReader();
    reader.onload = () => {
      dataURI = reader.result as string;
    };
    reader.readAsDataURL(file);
  } else {
    input.value = '';
    inputPlaceholder = "Only image files are accepted.";
    dataURI = '';
  }
}

</script>

  <label for={id} class="mb-2 inline-block text-neutral-500 dark:text-neutral-400 invisible"></label>
  <input
    class="rounded-b-[0px] relative dark:bg-[#3E3E55] bg-gray-200 rounded-[10px] m-0 block w-full min-w-0 flex-auto cursor-pointer border border-solid border-secondary-500 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-surface file:-mx-3 file:-my-[0.32rem] file:me-3 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-e file:border-solid file:border-inherit file:bg-transparent file:px-3 file:py-[0.32rem] file:text-surface dark:border-white/70 dark:text-white file:dark:text-white"
    type="file"
    id={id}
    accept="image/*"
    on:change={handleFileChange}
  />

<Input
  class="select-none border border-black bg-gray-200 rounded-t-[0px] dark:border-white dark:border"
  type="text"
  {id}
  {name}
  placeholder={inputPlaceholder}
  value={dataURI}
  disabled
/>
