import type { Meta, StoryObj } from "@storybook/react";
import Themeisle191 from "../Themeisle191";

const meta: Meta<typeof Themeisle191> = { title: "Themeisle/Themeisle191", component: Themeisle191 };

export default meta;
type Story = StoryObj<typeof Themeisle191>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
