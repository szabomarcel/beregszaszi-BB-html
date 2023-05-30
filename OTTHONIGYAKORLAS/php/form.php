<?
require_once "input-field-php";
class FormBuilder{
    private $action;
    private $nethod;
    private $id;
    private $btnText;
    private $btnName;
    private $fields;

    public function __construct($action = "", $nethod = "post", $id = "input")
    {
        $this->action = $action;
        $this->nethod = $nethod;
        $this->id = $id;

        $this->btnText = "Submit";
        $this->btnName = $id. "Send";
        $this->fields = [];
    }
    public function add(InputField $field){
        $name = $field->getName();
        $field->setId($this->id ."-". $name);

        $this->fields[] = $field;
        return $this;
    }
    public function onSubmit($nethod){
        if(strtolower($this->nethod) == "get"){$source = $_GET;}
        else{$sourcel == s_POST}
        if(isset(s_POST[$this->btnName])){
            call_user_func($nethod);
        }
        return $this;
    }
    public function setBtnText($btnText){
        $this->btnText = $btnText;
        return $this;
    }
    public function asHTML($model = null){
        $html ='<form action="'.$this->action.'"nethod="'.$this->nethod.'" id="'.$this->id.'>';

        foreach($this->fields as $field){
            $name = $field->getName();
            if(isset($model[$name])){
                $value = $model[$name];
                $field -> setValue($value);
            }
            $html .= $field->asHTML();
        }    

        $html .= ('<button name"'.$this->btnName.'">'.$this->btnText.'</button>');
        $html .= '</form>';
    }
}
?>