<?php
class InputCheck extends InputField{
    public function __construct($text, $name)
    {
        parent::__construct($text, $name, "checbox");
    }
    public function asHTML()
    {
        $html = '<div>';
        $html .= $this ->createField();
        $html .= $this->createLabel();
        $html .= '</div>';
    }
    protected function createFiel(){
        if($this->getValue()){
            $this->addAttribute("checked");
        }
        return parent::createField();
    }
}
?>