<?php

namespace Components\navigation\cec92063641b1475a94e0154fc3e918a8\c947f8ca42b0d41da822cf89844216729;

use App\Utilities\ExtendedComponent;

class c947f8ca42b0d41da822cf89844216729 extends ExtendedComponent
{
    protected string $uuid = "c947f8ca42b0d41da822cf89844216729";
    protected string $group_id = "cec92063641b1475a94e0154fc3e918a8";
    protected string $type = "navigation";
    protected string $name = "navigation";
    protected string $description = "navigation on header";
    // variables used in pug template
    protected array $variables = [
        
    ];
    // define which type of input each variable uses
    // AVAILABLE TYPES
    // ckeditor: for writing articles, large content
    // checkbox: for toggling on/off
    // input: for writing name, title, small content
    // media-input: for inserting images/iframes
    // multi-media-input: for inserting multiple images/iframes
    // select: for selecting content from a dropdown list
    // sortable: for a draggable sorting input
    // tag-input: for selecting multiple tags
    // textarea: for writing notes
    protected array $input_types = [
        
    ];
    /**
     * Create a new component instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Get the view / contents that represent the component.
     *
     * @return \Illuminate\Contracts\View\View|\Closure|string
     */
    public function render()
    {
        return view("$this->type.$this->uuid.$this->uuid");
    }
}