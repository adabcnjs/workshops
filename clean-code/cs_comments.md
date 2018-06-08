
###
```
# Indicates whether color is a valid SVG color string.
#
# SVG color descriptions are one of the following:
#
# * RGB values
#     * #rgb
#     * #rrggbb
#     * rgb(255, 0, 0) - not currently supported
#     * rgb(100%, 0%, 0%) - not currently supported
# * SVG Color names
def valid_color?(color)
  return color =~ /^#[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/ if color[0] == '#'

  COLOR_NAMES.include?(color)
end
```

### Commented out
```
module Codejunk

  def tweaked_logic(wday)
    # ((7 - wday) % 7) * 1.day
    ((7 - wday) % 7)
  end

  def alternate_logic(wday)
    if false
      ((7 - wday) % 7) * 1.day
    end
    ((7 - wday) % 7)
  end

end

module Codejunk

  # States the obvious
  def state_the_obvious
    "whatever"
  end

  # Takes modulus 100
  def comments_echoes_implementation(number)
    number % 100
  end

  # Subtracts
  def incorrect_comment
    1 + 1
  end

  # add
  def imprecise_comment
    1 + 1
  end

  # ad
  def misspelled_comment
    1 + 1
  end

end
```

