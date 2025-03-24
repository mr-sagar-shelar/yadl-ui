import type { Meta, StoryObj } from "@storybook/react";
import Themeisle97 from "../Themeisle97";

const meta: Meta<typeof Themeisle97> = { title: "Themeisle/Themeisle97", component: Themeisle97 };

export default meta;
type Story = StoryObj<typeof Themeisle97>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
