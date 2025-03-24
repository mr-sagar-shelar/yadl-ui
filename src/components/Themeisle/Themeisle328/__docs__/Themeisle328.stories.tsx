import type { Meta, StoryObj } from "@storybook/react";
import Themeisle328 from "../Themeisle328";

const meta: Meta<typeof Themeisle328> = { title: "Themeisle/Themeisle328", component: Themeisle328 };

export default meta;
type Story = StoryObj<typeof Themeisle328>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
