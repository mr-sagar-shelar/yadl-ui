import type { Meta, StoryObj } from "@storybook/react";
import Themeisle127 from "../Themeisle127";

const meta: Meta<typeof Themeisle127> = { title: "Themeisle/Themeisle127", component: Themeisle127 };

export default meta;
type Story = StoryObj<typeof Themeisle127>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
