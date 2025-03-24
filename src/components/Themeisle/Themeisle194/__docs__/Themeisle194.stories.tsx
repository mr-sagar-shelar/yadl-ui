import type { Meta, StoryObj } from "@storybook/react";
import Themeisle194 from "../Themeisle194";

const meta: Meta<typeof Themeisle194> = { title: "Themeisle/Themeisle194", component: Themeisle194 };

export default meta;
type Story = StoryObj<typeof Themeisle194>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
