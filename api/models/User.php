<?php
class User {
    public $id;
    public $clerk_id;
    public $name;
    public $email;
    public $role;
    public $created_at;

    public function __construct($data) {
        $this->id = $data['id'];
        $this->clerk_id = $data['clerk_id'];
        $this->name = $data['name'];
        $this->email = $data['email'];
        $this->role = $data['role'];
        $this->created_at = $data['created_at'];
    }
}
?>
