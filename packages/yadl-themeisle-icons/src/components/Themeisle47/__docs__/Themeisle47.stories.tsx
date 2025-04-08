import type { Meta, StoryObj } from "@storybook/react";
import Themeisle47 from "../Themeisle47";

const meta: Meta<typeof Themeisle47> = { title: "Themeisle/Themeisle47", component: Themeisle47 };

export default meta;
type Story = StoryObj<typeof Themeisle47>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
