<?php

class InputSelect extends InputField{
    private $options;
    public function __construct($text, $name, $options = [])
    {
        parent::__construct($text, $name, "");
        $this->options = $options;
    }
    public function __setOption($options)
    {
        $this->options = $options;
        return createField();
    }
    protected function createField(){
        $html = '<select name"'.$this->getName().'"id="'.$this->getId().'">';
        foreach($this->options as $value => $option){
            $html .=('<option value="'.$value .'"');
            if($this->getValue() == $value{$html .= 'selected';})
            $html .= ('>'. $option. '</option>');
        }
        $html .= '</select>';
        return;
    }
}
?>