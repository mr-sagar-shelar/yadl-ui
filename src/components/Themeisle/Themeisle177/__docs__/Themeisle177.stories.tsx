import type { Meta, StoryObj } from "@storybook/react";
import Themeisle177 from "../Themeisle177";

const meta: Meta<typeof Themeisle177> = { title: "Themeisle/Themeisle177", component: Themeisle177 };

export default meta;
type Story = StoryObj<typeof Themeisle177>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
