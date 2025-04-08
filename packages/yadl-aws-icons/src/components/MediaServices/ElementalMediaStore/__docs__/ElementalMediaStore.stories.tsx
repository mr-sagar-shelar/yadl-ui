import type { Meta, StoryObj } from "@storybook/react";
import ElementalMediaStore from "../ElementalMediaStore";

const meta: Meta<typeof ElementalMediaStore> = { title: "AWS/MediaServices/ElementalMediaStore", component: ElementalMediaStore };

export default meta;
type Story = StoryObj<typeof ElementalMediaStore>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
