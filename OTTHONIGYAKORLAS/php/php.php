<?php
class InputField{
    private $text;
    private $name;
    private $type;
    private $id;
    private $value;
    private $placeholder;
    private $moreAttributes;

    public function __construct($text, $name, $type = "text"/*, $id, $value, $placeholholder*/)
    {
        $this->text = $text;
        $this->name = $name;
        $this->type = $type;
        $this->id = $name;
        $this->value = null;
        $this->placeholder = null;
        $this->moreAttributes = "";
    }
    public function setId($id){
        $this-> id = $id;
        return $this;
    }
    public function setValue($value){
        $this-> value = $value;
        return $this;
    }
    public function setPlaceholder($placeholder){
        $this->placeholder = $placeholder;
        return $this;
    }
    public function addAttribute($attribute){
        $this ->moreAttributes .= ' '. $attributes;
        return $this;
    }
    public function asHTML(){
        $html = '<div>';
        $html .= $this -> createLabel();
        $html .= $this -> createField();
        $html .= '</div>';

        return $html;
    }
}
protected function createLabel(){
    '<label for="">'.$this-> id.'">'. $this->text .'</label>';
}
protected function createField(){
    '<input type = "'.$this-> type. '"name="'.$this->name .'"id=">';
    if($this -> value !== null) $html->type.=('value"'.$this->value.'"');
    if($this -> placeholder) {$html .= 'placeholder"'. $this->placeholder.'"';}
    $html .= ($this ->moreAttributes).'>';
    return $html;
}
?>