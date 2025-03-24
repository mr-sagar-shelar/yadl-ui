import type { Meta, StoryObj } from "@storybook/react";
import Themeisle385 from "../Themeisle385";

const meta: Meta<typeof Themeisle385> = { title: "Themeisle/Themeisle385", component: Themeisle385 };

export default meta;
type Story = StoryObj<typeof Themeisle385>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
