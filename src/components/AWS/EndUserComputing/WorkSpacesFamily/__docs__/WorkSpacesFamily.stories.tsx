import type { Meta, StoryObj } from "@storybook/react";
import WorkSpacesFamily from "../WorkSpacesFamily";

const meta: Meta<typeof WorkSpacesFamily> = { title: "AWS/EndUserComputing/WorkSpacesFamily", component: WorkSpacesFamily };

export default meta;
type Story = StoryObj<typeof WorkSpacesFamily>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
