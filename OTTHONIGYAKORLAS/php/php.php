<?php
class InputField{
    private $text;
    private $name;
    private $type;
    private $id;
    private $value;

    public function __construct($text, $name, $type = "text", $id, $value)
    {
        $this->text = $text;
        $this->name = $name;
        $this->type = $type;
        $this->id = $name;
        $this->value = $value;
    }
    public function setId($id){
        $this-> id = $id;
        return $this;
    }
    public function setValue($value){
        $this-> value = $value;
        return $this;
    }
    public function asHTML(){
        $html = '<div>';
        $html .= ('<label for="">'.$this-> id.'">'. $this->text .'</label>');
        $html .= ('<input type = "'.$this-> type. '"name="'.$this->name .'"id=">');
        $html .= '</div>';

        return $html;
    }
}
?>