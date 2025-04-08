import type { Meta, StoryObj } from "@storybook/react";
import Themeisle135 from "../Themeisle135";

const meta: Meta<typeof Themeisle135> = { title: "Themeisle/Themeisle135", component: Themeisle135 };

export default meta;
type Story = StoryObj<typeof Themeisle135>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
