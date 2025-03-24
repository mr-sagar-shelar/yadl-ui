import type { Meta, StoryObj } from "@storybook/react";
import Themeisle118 from "../Themeisle118";

const meta: Meta<typeof Themeisle118> = { title: "Themeisle/Themeisle118", component: Themeisle118 };

export default meta;
type Story = StoryObj<typeof Themeisle118>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
