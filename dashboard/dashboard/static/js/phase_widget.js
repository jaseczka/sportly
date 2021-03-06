
(function( $ ) {
  $.widget( "sportly.phase", {
    options: { 
      name: "Phase",
      num: null,
      board: null,
      parent: null,
      type: 'group'
    },
  _create: function() {
    var self=this;
    this.objectCount = 0;
    this.element
      .addClass("sportly-phase")
      .addClass("sportly-element")
      .resizable({
        containment: "parent",
        resize: function(event, ui) {
          self._adjustLabel();
        }
      })
      .draggable({
        containment: "parent",
        handle: "h1"
      })
      .on("mousedown", function(event) {
        event.preventDefault();
        event.stopPropagation();
        self.options.board.selectElement(self.element);
        self.options.board.addElement(event, self);
      });

    this.label = $("<h1/>")
      .text(this.options.name)
      .appendTo(this.element);

    this.settings = $("<div/>", {
        'class': 'settings',
      })
      .on("mousedown", function(event) {
        event.stopPropagation();
      })
      .appendTo(this.element);
 
    this.settingsType = $("<select/>", {
        'class': 'type'
      })
      .on("change", function(event) {
        this.options.type = event.target.value ;
      })
      .appendTo(this.settings) 
    $("<option/>", {
      'value': 'group',
      'selected': 'selected',
    })
      .text("group")
      .appendTo(this.settingsType)
    $("<option/>", {
      'value': 'bracket'
    })
      .text("bracket")
      .appendTo(this.settingsType)
   

    $("<label/>", {
      'for': 'nr'+this.objectCount
    })
      .text("Teams:")
      .appendTo(this.settings);
    $("<input/>", {
      'type': 'text',
      'size': '3',
      'value': '4',
      'name': 'nr'+this.objectCount
    })
      .appendTo(this.settings); 
    this.objects = [];
  },
  _setOption: function( key, value ) {
    switch( key ) {
      case "clear":
        break;
    }
    this._super( "_setOption", key, value );
  },
  _destroy: function() {
    this.element
      .removeClass("sportly-phase")
      .removeClass("sportly-element")
      .resizable("destroy")
      .draggable("destroy")
  },
  resize: function(dem) {
    this.element.css({'width': dem[0], 'height': dem[1]});
    this._adjustLabel(dem[1]);
  },
  _adjustLabel: function(h) {
    if (!h)
      h = this.element.height();
    this.label.css({'width': h, 'margin-top': h/2-10, 'margin-left': (h/2-10)*-1});  
  }
  });
}( jQuery ) );


