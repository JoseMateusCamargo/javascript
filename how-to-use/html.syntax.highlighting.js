// O método estático String.raw() é uma função tag de modelos literais
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/raw

const markup = `
<div class="tweet">
    <div class="box d-flex justify-content-between">
        <div class="col-9">
            <div class="icon-text mb-md-2 ml-1">
                <span class="text-black-75" style="font-size: 1.2rem;"> Title</span><br />
            </div>
        </div>
    </div>
</div>`;

const markup_highlight = String.raw`
<div class="tweet">
    <div class="box d-flex justify-content-between">
        <div class="col-9">
            <div class="icon-text mb-md-2 ml-1">
                <span class="text-black-75" style="font-size: 1.2rem;"> Title</span><br />
            </div>
        </div>
    </div>
</div>`