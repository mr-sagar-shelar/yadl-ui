import type { Meta, StoryObj } from "@storybook/react";
import Themeisle480 from "../Themeisle480";

const meta: Meta<typeof Themeisle480> = { title: "Themeisle/Themeisle480", component: Themeisle480 };

export default meta;
type Story = StoryObj<typeof Themeisle480>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
