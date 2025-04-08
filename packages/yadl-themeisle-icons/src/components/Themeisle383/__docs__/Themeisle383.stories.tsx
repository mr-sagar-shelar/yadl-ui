import type { Meta, StoryObj } from "@storybook/react";
import Themeisle383 from "../Themeisle383";

const meta: Meta<typeof Themeisle383> = { title: "Themeisle/Themeisle383", component: Themeisle383 };

export default meta;
type Story = StoryObj<typeof Themeisle383>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
