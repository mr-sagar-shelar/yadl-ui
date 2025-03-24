import type { Meta, StoryObj } from "@storybook/react";
import Themeisle170 from "../Themeisle170";

const meta: Meta<typeof Themeisle170> = { title: "Themeisle/Themeisle170", component: Themeisle170 };

export default meta;
type Story = StoryObj<typeof Themeisle170>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
