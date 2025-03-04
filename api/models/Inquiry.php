<?php
class Inquiry {
    public $id;
    public $property_id;
    public $user_id;
    public $message;
    public $status;
    public $created_at;

    public function __construct($data) {
        $this->id = $data['id'];
        $this->property_id = $data['property_id'];
        $this->user_id = $data['user_id'];
        $this->message = $data['message'];
        $this->status = $data['status'];
        $this->created_at = $data['created_at'];
    }
}
?>
